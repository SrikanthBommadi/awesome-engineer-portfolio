import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    emoji: "☁️",
    skills: [
      { name: "AWS (EKS, EC2, S3, Lambda, VPC, IAM)", level: 92 },
      { name: "Azure (AKS, VMs, VNet, Azure AD)", level: 80 },
      { name: "GCP", level: 70 },
    ],
  },
  {
    title: "Containerization & Orchestration",
    emoji: "🐳",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes (EKS, OpenShift)", level: 90 },
      { name: "Helm", level: 88 },
      { name: "Rancher", level: 78 },
    ],
  },
  {
    title: "IaC & Configuration",
    emoji: "🔧",
    skills: [
      { name: "Terraform", level: 92 },
      { name: "CloudFormation / AWS CDK", level: 85 },
      { name: "Ansible", level: 85 },
    ],
  },
  {
    title: "CI/CD & DevSecOps",
    emoji: "🚀",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "ArgoCD / GitOps", level: 88 },
      { name: "Spinnaker", level: 75 },
      { name: "SonarQube / Trivy / Veracode", level: 85 },
    ],
  },
  {
    title: "Programming & Scripting",
    emoji: "💻",
    skills: [
      { name: "Python (boto3, Lambda)", level: 90 },
      { name: "Bash / Shell", level: 92 },
      { name: "Groovy", level: 78 },
      { name: "Java", level: 70 },
    ],
  },
  {
    title: "Monitoring & Observability",
    emoji: "📊",
    skills: [
      { name: "Prometheus & Grafana", level: 90 },
      { name: "ELK Stack (Elasticsearch, Logstash, Kibana)", level: 85 },
      { name: "Datadog / Dynatrace / Splunk", level: 82 },
      { name: "CloudWatch / PagerDuty", level: 88 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-card/30">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Technologies & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/20 transition-all duration-300 card-glow"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-3.5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-foreground">{skill.name}</span>
                      <span className="text-[10px] text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
