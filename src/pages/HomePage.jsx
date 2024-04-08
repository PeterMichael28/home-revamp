import FaqSection from "~/components/HomePage/FaqSection";
import HeroSection from "~/components/HomePage/HeroSection";
import OffersSection from "~/components/HomePage/OffersSection";
import ProjectSection from "~/components/HomePage/ProjectSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ProjectSection />
      <OffersSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
