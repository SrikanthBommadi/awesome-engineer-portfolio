import { motion } from "motion/react";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-28 px-6">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Resume</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My <span className="text-gradient">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 text-center card-glow">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Srikanth Bommadi</h3>
            <p className="text-muted-foreground mb-6">
              DevOps Engineer • SRE • MLOps • AI/ML Engineer
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://raw.githubusercontent.com/SrikanthBommadi/awesome-engineer-portfolio/main/SRIKANTH.docx"
                download="Srikanth_Bommadi_Resume.docx"
                className="group flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:brightness-110 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://docs.google.com/gview?url=https://raw.githubusercontent.com/SrikanthBommadi/awesome-engineer-portfolio/main/SRIKANTH.docx&embedded=false"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Eye size={18} />
                View Online
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Last updated: 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
