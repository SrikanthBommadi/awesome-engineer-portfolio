import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Wilmington University",
    location: "Delaware, USA",
    period: "2022 – 2024",
    highlights: [
      "Specialized in Cloud Computing & DevOps Engineering",
      "Research on container orchestration optimization",
      "GPA: 3.8/4.0",
    ],
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "JNTUH (Jawaharlal Nehru Technological University)",
    location: "Hyderabad, India",
    period: "2016 – 2020",
    highlights: [
      "Focus on Software Engineering & Systems Programming",
      "Led college tech club & organized hackathons",
      "First Class with Distinction",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-6">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Academic <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 mt-2 z-10 shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 card-glow">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1.5">
                      {edu.school}
                    </p>
                    <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
                      <MapPin size={12} />
                      {edu.location}
                    </p>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h) => (
                        <li key={h} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-0.5">▹</span>
                          {h}
                        </li>
                      ))}
                    </ul>
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

export default EducationSection;
