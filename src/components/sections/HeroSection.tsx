import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const roles = ["DevOps Engineer", "SRE Engineer", "MLOps Engineer", "AI/ML Engineer", "Cloud Architect", "GenAI Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      <div className="container max-w-6xl relative z-10 px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-primary text-sm mb-6 tracking-widest uppercase"
          >
            Hi, I'm Srikanth Bommadi
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight"
          >
            <span className="text-gradient glow-red">{text}</span>
            <span className="text-primary animate-pulse">|</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            5+ years automating, deploying, and operating highly available systems
            across AWS, Azure & GCP. Specializing in Kubernetes, Terraform, CI/CD,
            and site reliability engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:brightness-110 transition-all duration-300"
            >
              View My Work
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://raw.githubusercontent.com/SrikanthBommadi/awesome-engineer-portfolio/main/SRIKANTH.docx"
              download="Srikanth_Bommadi_Resume.docx"
              className="flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
