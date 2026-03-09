import { motion } from "motion/react";

const certifications = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    icon: "🟧",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "🟧",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    icon: "🟣",
  },
  {
    name: "Certified Kubernetes Engineer (CKE)",
    issuer: "Cloud Native Computing Foundation",
    icon: "☸️",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-28 px-6 bg-card/30">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Professional <span className="text-gradient">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 card-glow text-center"
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-sm font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
