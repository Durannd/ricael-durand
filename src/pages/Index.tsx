import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudySection from "@/components/CaseStudySection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main>
      <ScrollProgress />
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <CaseStudySection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
