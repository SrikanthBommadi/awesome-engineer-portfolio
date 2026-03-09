import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "One of the most reliable engineers I've worked with. Their ability to diagnose complex infrastructure issues under pressure is remarkable.",
    author: "Rajesh Kumar",
    role: "Senior Engineering Manager",
  },
  {
    text: "Transformed our entire deployment pipeline. What used to take hours now takes minutes, with better reliability and monitoring.",
    author: "James Mitchell",
    role: "Director of Platform Engineering",
  },
  {
    text: "A true full-stack SRE who understands both the code and the infrastructure. Their contributions significantly improved our platform stability.",
    author: "Anitha Reddy",
    role: "Lead Cloud Architect",
  },
  {
    text: "Exceptional problem-solver who brings deep Kubernetes and Terraform expertise. Always goes above and beyond to ensure system reliability.",
    author: "David Thompson",
    role: "VP of Infrastructure",
  },
  {
    text: "His automation skills saved our team countless hours. The CI/CD pipelines he built are still the gold standard in our organization.",
    author: "Venkat Narayana",
    role: "Principal DevOps Engineer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-28 px-6">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-8 relative card-glow"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>
              <div>
                <p className="text-foreground font-semibold text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
