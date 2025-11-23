import { HeroSlider } from "@/components/HeroSlider";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
