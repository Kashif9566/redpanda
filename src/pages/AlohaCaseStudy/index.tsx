import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import MobileDesignSection from './MobileDesignSection';
import ClientProblems from './ClientProblems';
import SolutionSection from './SolutionSection';
import VisualIdentity from './VisualIdentity';
import FooterSection from './FooterSection';

const AlohaCaseStudy = () => {
  return (
    <div className="bg-[#E2E2E2] text-black min-h-screen w-full overflow-hidden font-manrope p-10">
      <HeroSection />
      <IntroSection />
      <MobileDesignSection />
      <ClientProblems />
      <SolutionSection />
      <VisualIdentity />
      <FooterSection />
    </div>
  );
};

export default AlohaCaseStudy;
