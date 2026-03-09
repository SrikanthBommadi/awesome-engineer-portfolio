import { useState, useEffect } from "react";
import { motion } from "motion/react";

const commands = [
  { cmd: "whoami", output: "Srikanth Bommadi" },
  { cmd: "cat role.txt", output: "DevOps Engineer | SRE | MLOps" },
  { cmd: "uptime", output: "5+ years in production" },
  { cmd: "kubectl get pods -n skills", output: "NAME                    READY   STATUS\nterraform-iac           1/1     Running\nkubernetes-orchestrator 1/1     Running\nci-cd-pipeline          1/1     Running\nmonitoring-stack        1/1     Running" },
  { cmd: "echo $LOCATION", output: "USA 🇺🇸" },
];

const TerminalIntro = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines < commands.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-16"
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
        </div>

        {/* Terminal body */}
        <div className="p-5 font-mono text-sm space-y-3 min-h-[280px]">
          {commands.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-primary">❯</span>
                <span className="text-foreground">{line.cmd}</span>
              </div>
              <pre className="text-muted-foreground ml-5 mt-1 whitespace-pre-wrap text-xs leading-relaxed">
                {line.output}
              </pre>
            </motion.div>
          ))}
          {visibleLines < commands.length && (
            <div className="flex items-center gap-2">
              <span className="text-primary">❯</span>
              <span className="w-2 h-4 bg-primary animate-blink inline-block" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalIntro;
