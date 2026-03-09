import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQ {
  keywords: string[];
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { keywords: ["who", "about", "name", "yourself"], question: "Who are you?", answer: "I'm Srikanth Bommadi — a DevOps Engineer, SRE & MLOps specialist with 5+ years of experience building scalable infrastructure and CI/CD pipelines." },
  { keywords: ["skills", "tech", "stack", "technologies"], question: "What are your skills?", answer: "I specialize in Kubernetes, Terraform, AWS, Docker, CI/CD (Jenkins, GitHub Actions), monitoring (Prometheus, Grafana), and MLOps tooling." },
  { keywords: ["experience", "work", "job", "career"], question: "What's your experience?", answer: "I have 5+ years of production experience across DevOps, SRE, and MLOps roles. Check out the Experience section for detailed info!" },
  { keywords: ["project", "projects", "portfolio", "built"], question: "What projects have you worked on?", answer: "I've built infrastructure automation, CI/CD pipelines, monitoring stacks, and ML deployment systems. Scroll to the Projects section for details!" },
  { keywords: ["contact", "hire", "email", "reach"], question: "How can I contact you?", answer: "You can reach me through the Contact section at the bottom of this page. I'd love to hear from you!" },
  { keywords: ["resume", "cv", "download"], question: "Can I download your resume?", answer: "Yes! Head to the Resume section on this page where you can download my PDF resume or view it online." },
  { keywords: ["certification", "certified", "certs"], question: "Do you have certifications?", answer: "Yes, I hold several industry certifications. Check the Certifications section for the full list!" },
  { keywords: ["location", "where", "based"], question: "Where are you based?", answer: "I'm based in the USA 🇺🇸." },
  { keywords: ["available", "freelance", "open", "opportunities"], question: "Are you open to opportunities?", answer: "Yes! I'm open to full-time roles, contract work, and freelance DevOps/SRE consulting. Feel free to reach out via the Contact section!" },
  { keywords: ["cloud", "aws", "azure", "gcp", "google cloud"], question: "Which cloud platforms do you use?", answer: "I have deep expertise in AWS and hands-on experience with GCP and Azure. I'm comfortable designing multi-cloud architectures." },
  { keywords: ["ci", "cd", "pipeline", "jenkins", "github actions", "deploy"], question: "What CI/CD tools do you use?", answer: "I work with Jenkins, GitHub Actions, GitLab CI, ArgoCD, and FluxCD to build robust deployment pipelines with automated testing and rollbacks." },
  { keywords: ["kubernetes", "k8s", "container", "docker", "orchestration"], question: "Tell me about your Kubernetes experience.", answer: "I manage production Kubernetes clusters, handle deployments with Helm charts, implement service meshes, and set up auto-scaling and monitoring." },
  { keywords: ["monitor", "observability", "prometheus", "grafana", "alert"], question: "What monitoring tools do you use?", answer: "I use Prometheus, Grafana, ELK Stack, Datadog, and PagerDuty for comprehensive observability — from metrics and logs to alerting and incident response." },
  { keywords: ["terraform", "iac", "infrastructure", "ansible", "automation"], question: "Do you use Infrastructure as Code?", answer: "Absolutely! Terraform is my go-to for IaC. I also use Ansible for configuration management and Pulumi for cloud-native infrastructure." },
  { keywords: ["education", "degree", "study", "university", "college"], question: "What's your educational background?", answer: "Check out the Education section on this page for my academic background and qualifications!" },
  { keywords: ["blog", "write", "article", "post"], question: "Do you write technical blogs?", answer: "Yes, I enjoy sharing knowledge through technical articles on DevOps best practices, cloud architecture, and automation. Stay tuned for more!" },
  { keywords: ["hello", "hi", "hey", "greet", "sup", "yo"], question: "Say hello!", answer: "Hey there! 👋 Welcome to my portfolio. Feel free to ask me anything about Srikanth's skills, experience, or projects!" },
  { keywords: ["thanks", "thank", "appreciate", "great", "awesome", "cool"], question: "Thanks!", answer: "You're welcome! 😊 If you have more questions, I'm here to help. Don't forget to check out the Contact section if you'd like to connect!" },
];

const suggestedQuestions = [
  "Who are you?",
  "What are your skills?",
  "How can I contact you?",
  "Can I download your resume?",
];

interface Message {
  role: "user" | "bot";
  text: string;
}

const findAnswer = (input: string): string => {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some((kw) => lower.includes(kw))) {
      return faq.answer;
    }
  }
  return "I'm not sure about that! Try asking about my skills, experience, projects, certifications, or how to contact me.";
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hey! 👋 I'm Srikanth's portfolio assistant. Ask me anything about his work!" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const msg = text || input.trim();
    if (!msg) return;
    const userMsg: Message = { role: "user", text: msg };
    const botMsg: Message = { role: "bot", text: findAnswer(msg) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chatbot"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] max-h-[500px] rounded-2xl border border-border bg-card shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-primary text-primary-foreground flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-foreground/80 animate-pulse" />
              <span className="font-semibold text-sm">Portfolio Assistant</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px] max-h-[340px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Suggested questions (only at start) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-foreground hover:bg-accent transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a question..."
                className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={() => handleSend()}
                className="w-9 h-9 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
