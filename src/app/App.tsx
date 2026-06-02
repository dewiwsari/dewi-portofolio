import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#F8FAFC" }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
