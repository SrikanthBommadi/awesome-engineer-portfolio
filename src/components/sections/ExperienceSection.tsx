import { motion } from "motion/react";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Air Canada",
    location: "Philadelphia, PA",
    period: "July 2024 — Present",
    description: "Leading DevOps initiatives for critical airline systems, automating infrastructure and CI/CD pipelines for reliable operations.",
    achievements: [
      "Modernized workflows with Shell scripts for cron-based backups and Python Lambda functions for flight cancellations and customer notifications",
      "Managed AWS infrastructure via Terraform covering networking, compute, and storage with robust state management",
      "Engineered custom Helm charts and Kubernetes Operators using CRDs to standardize microservice deployments and reduce environment drift",
      "Implemented Jenkins CI/CD pipelines with SonarQube, Aqua, Veracode, and Trivy for security scanning",
      "Configured Prometheus, Grafana, and Alertmanager with PagerDuty/Slack integration, reducing MTTR across critical systems",
    ],
    tech: ["AWS", "Kubernetes", "Terraform", "Jenkins", "ArgoCD", "Docker", "Helm", "Kafka", "Redis", "ELK", "Prometheus"],
  },
  {
    role: "Site Reliability Engineer",
    company: "eHealth",
    location: "Dallas, Texas",
    period: "Nov 2022 — June 2024",
    description: "Built and maintained HIPAA-compliant cloud infrastructure for healthcare platforms serving patients across telemedicine and remote monitoring.",
    achievements: [
      "Automated HIPAA-compliant CI/CD pipelines using Jenkins, Trivy, Aqua Security, and SonarQube for continuous PHI protection",
      "Architected high-availability Amazon EKS clusters for telemedicine platforms enabling real-time vitals streaming",
      "Built disaster-recovery automation with Terraform and Ansible, supporting near-zero RTO/RPO for EHR data integrity",
      "Integrated Prometheus, Grafana, and ELK Stack for compliance-driven observability, reducing incident resolution time by 30%",
      "Led cost optimization using tagging strategies, autoscaling, and usage analysis while maintaining patient-facing performance",
    ],
    tech: ["AWS", "EKS", "Terraform", "Ansible", "Jenkins", "ArgoCD", "Rancher", "Spinnaker", "Prometheus", "Grafana", "ELK"],
  },
  {
    role: "Cloud Engineer",
    company: "HeedData",
    location: "Hyderabad, India",
    period: "April 2020 — March 2022",
    description: "Designed and deployed scalable AWS cloud solutions with Infrastructure as Code, ensuring high availability and security compliance.",
    achievements: [
      "Designed resilient AWS environments using Terraform IaC, enabling high availability across compute, networking, and security layers",
      "Implemented AWS IAM policies across 50+ cloud resources, enforcing least-privilege access and reducing security exposure by ~60%",
      "Orchestrated containerized workloads using Amazon EKS and ECS for efficient scaling and high availability",
      "Strengthened security posture with AWS Secrets Manager and SSM Parameter Store, aligning with audit and compliance standards",
      "Employed Git-based IaC workflows for version control, team collaboration, and safe infrastructure rollbacks",
    ],
    tech: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Ansible", "EC2", "S3", "VPC", "RDS", "IAM"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-primary animate-pulse-glow" />

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 card-glow">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company} <span className="text-muted-foreground font-normal">— {exp.location}</span></p>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-primary/90 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
