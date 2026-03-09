import { motion } from "motion/react";
import { Terminal, Cpu, MessageSquare } from "lucide-react";

const projects = [
  {
    title: "AI DevOps Log Analyzer",
    description:
      "Built an intelligent log analysis tool that uses OpenAI to parse, classify, and summarize application logs in real-time — enabling faster root cause analysis and proactive incident detection.",
    tech: ["Python", "FastAPI", "OpenAI", "Docker", "AWS"],
    icon: Terminal,
    category: "AI + DevOps",
  },
  {
    title: "MLOps Pipeline",
    description:
      "Designed an end-to-end MLOps pipeline for automating model training, experiment tracking, and production deployment with orchestrated workflows and Kubernetes-based serving infrastructure.",
    tech: ["MLflow", "Airflow", "Kubernetes"],
    icon: Cpu,
    category: "MLOps",
  },
  {
    title: "RAG AI Document Chatbot",
    description:
      "Created a Retrieval-Augmented Generation chatbot that ingests documents, stores embeddings in a vector database, and answers questions with contextual accuracy via a FastAPI backend.",
    tech: ["LangChain", "Vector DB", "FastAPI"],
    icon: MessageSquare,
    category: "AI Agent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-card/30">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            AI Agents & <span className="text-gradient">Automation</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Hands-on projects where I built intelligent agents and automation
            tools to streamline DevOps workflows, reduce toil, and improve
            system reliability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 card-glow flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <project.icon size={20} />
                </div>
                <span className="font-mono text-xs text-primary/80 bg-primary/5 border border-primary/20 px-2.5 py-0.5 rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-primary/90 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
