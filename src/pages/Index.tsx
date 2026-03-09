import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ScrollingBackground from "@/components/layout/ScrollingBackground";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/sections/HeroSection";
import TerminalIntro from "@/components/sections/TerminalIntro";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

import ChatBot from "@/components/common/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollingBackground />
      <ChatBot />
      <div className="relative z-10">
        <Navbar />
        <ScrollProgress />
        <main>
          <HeroSection />
          <TerminalIntro />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <TestimonialsSection />
          <CertificationsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
