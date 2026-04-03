import HeroSection from "./HeroSection.tsx";
import MockupGridSection from "./MockupGridSection.tsx";
import SolutionSection from "./SolutionSection.tsx";
import ExposureSection from "./ExposureSection.tsx";
import VisualIdentitySection from "./VisualIdentitySection.tsx";
import BrandAssetsSection from "./BrandAssetsSection.tsx";
import FooterSection from "./FooterSection.tsx";

const DronketCaseStudy = () => {
  return (
    <div className="w-full min-h-screen bg-[#101010] text-[#FAFAFA] font-k2d overflow-x-hidden">
      <HeroSection />
      <MockupGridSection />
      <SolutionSection />
      <ExposureSection />
      <VisualIdentitySection />
      <BrandAssetsSection />
      <FooterSection />
    </div>
  );
};

export default DronketCaseStudy;
