import { motion } from "motion/react";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import AnimatedCounter from "@/components/common/AnimatedCounter";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "5+" },
  { icon: Award, label: "Certifications", value: "4" },
  { icon: GraduationCap, label: "Master's Degree", value: "MS IS" },
  { icon: MapPin, label: "Based In", value: "USA" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Passionate about building <span className="text-gradient">reliable</span> systems
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              I'm a DevOps/SRE Engineer with 5+ years of experience automating, deploying,
              and operating highly available systems across Cloud Computing, SRE, DevOps,
              Systems Administration, and SCM.
            </p>
            <p>
              With extensive hands-on experience across AWS, Azure, and GCP, I specialize in
              Infrastructure as Code using Terraform, container orchestration with Kubernetes
              and Docker, and building robust CI/CD pipelines with Jenkins and ArgoCD.
            </p>
            <p>
              I'm also passionate about MLOps and AI/GenAI — building end-to-end ML pipelines
              with MLflow, Airflow, and Kubernetes, and developing Generative AI solutions
              using LangChain, RAG architectures, and LLM-powered applications. I bridge
              the gap between DevOps and AI by operationalizing ML models at scale.
            </p>
            <p>
              I hold a Master of Science in Information Systems from Wilmington University
              and a B.Tech in Computer Science from JNTUH, Hyderabad. My approach combines
              SRE best practices — SLIs, SLOs, observability, and incident response — with
              DevSecOps principles to ensure secure, reliable production environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 card-glow"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <AnimatedCounter
                  value={stat.value}
                  className="text-2xl font-bold text-foreground mb-1 block"
                />
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
