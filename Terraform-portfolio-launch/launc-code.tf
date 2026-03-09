############################################################
# 1️⃣ PROVIDER CONFIGURATION
# This tells Terraform to use AWS and the us-east-1 region.
# CloudFront + ACM certificates for HTTPS must use us-east-1.
############################################################

provider "aws" {
  region = "us-east-1"
}

############################################################
# 2️⃣ FETCH EXISTING RESOURCES
# We are NOT creating the S3 bucket.
# Terraform will just read the existing bucket and hosted zone.
############################################################

data "aws_s3_bucket" "portfolio_bucket" {
  bucket = "srikanthreddy.fun"
}

data "aws_route53_zone" "main_zone" {
  name = "srikanthreddy.fun"
}

############################################################
# 3️⃣ CREATE ACM SSL CERTIFICATE
# This certificate will enable HTTPS for your domain.
# It includes both root domain and www domain.
############################################################

resource "aws_acm_certificate" "portfolio_cert" {
  domain_name       = "srikanthreddy.fun"
  validation_method = "DNS"

  subject_alternative_names = [
    "www.srikanthreddy.fun"
  ]

  lifecycle {
    create_before_destroy = true
  }
}

############################################################
# 4️⃣ CREATE DNS RECORDS FOR ACM VALIDATION
# AWS provides DNS records that prove domain ownership.
# Terraform automatically creates them in Route53.
############################################################

resource "aws_route53_record" "cert_validation_records" {
  for_each = {
    for dvo in aws_acm_certificate.portfolio_cert.domain_validation_options :
    dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  zone_id = data.aws_route53_zone.main_zone.zone_id
  name    = each.value.name
  type    = each.value.type
  ttl     = 60
  records = [each.value.record]
}

############################################################
# 5️⃣ VALIDATE ACM CERTIFICATE
# This waits until the certificate is verified.
############################################################

resource "aws_acm_certificate_validation" "portfolio_cert_validation" {
  certificate_arn         = aws_acm_certificate.portfolio_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation_records : record.fqdn]
}

############################################################
# 6️⃣ CREATE CLOUDFRONT DISTRIBUTION
# CloudFront will:
# - Serve the website from S3
# - Enable HTTPS
# - Provide CDN acceleration
############################################################

resource "aws_cloudfront_distribution" "portfolio_distribution" {

  enabled             = true
  default_root_object = "index.html"

  ##########################################################
  # ORIGIN CONFIGURATION
  # This connects CloudFront to the S3 bucket.
  ##########################################################

  origin {
    domain_name = data.aws_s3_bucket.portfolio_bucket.bucket_regional_domain_name
    origin_id   = "portfolioS3Origin"
  }

  ##########################################################
  # CUSTOM DOMAIN NAMES
  ##########################################################

  aliases = [
    "srikanthreddy.fun",
    "www.srikanthreddy.fun"
  ]

  ##########################################################
  # CACHE BEHAVIOR
  ##########################################################

  default_cache_behavior {

    target_origin_id = "portfolioS3Origin"

    allowed_methods = [
      "GET",
      "HEAD"
    ]

    cached_methods = [
      "GET",
      "HEAD"
    ]

    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
  }

  ##########################################################
  # SSL CERTIFICATE FOR HTTPS
  ##########################################################

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate_validation.portfolio_cert_validation.certificate_arn
    ssl_support_method  = "sni-only"
  }

  ##########################################################
  # GEO RESTRICTIONS (NONE)
  ##########################################################

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  ##########################################################
  # PRICE CLASS
  # Limits CDN to cheaper regions (good for portfolio).
  ##########################################################

  price_class = "PriceClass_100"
}

############################################################
# 7️⃣ ROUTE53 RECORD FOR ROOT DOMAIN
# This connects your main domain to CloudFront.
############################################################

resource "aws_route53_record" "root_domain" {

  zone_id = data.aws_route53_zone.main_zone.zone_id
  name    = "srikanthreddy.fun"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

############################################################
# 8️⃣ ROUTE53 RECORD FOR WWW DOMAIN
############################################################

resource "aws_route53_record" "www_domain" {

  zone_id = data.aws_route53_zone.main_zone.zone_id
  name    = "www"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.portfolio_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.portfolio_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

############################################################
# 9️⃣ OUTPUT CLOUDFRONT URL
############################################################

output "cloudfront_distribution_url" {
  value = aws_cloudfront_distribution.portfolio_distribution.domain_name
}