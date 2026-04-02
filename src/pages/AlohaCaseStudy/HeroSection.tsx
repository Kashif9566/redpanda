import NewCaseStudyBadge from './NewCaseStudyBadge';

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col pt-6">
      {/* Top Header */}
      <div className="px-6 md:px-12 flex justify-between items-center w-full">
        {/* NEW CASE STUDY - Left */}
        <NewCaseStudyBadge />

        {/* Logo */}
        <div className="font-old-english text-6xl md:text-8xl tracking-tight text-[#101010]">
          Red Panda Network
        </div>

        {/* NEW CASE STUDY - Right */}
        <NewCaseStudyBadge />
      </div>

      {/* Ticker / Nav Bar */}
      <div className="mt-6 w-full bg-[#101010] text-[#FAFAFA] flex flex-col md:flex-row justify-between items-center px-6 py-3 text-xs md:text-[14px] font-antonio uppercase tracking-widest font-semibold">
        <div className="text-gray-300">
          WE ARE REACHING THE NEW HEIGHTS IN THE DESIGN INDUSTRY & NEXT COULD BE YOUR PROJECT HERE
        </div>
        <div className="flex space-x-8 mt-4 md:mt-0 leading-none">
          <a href="/" className="hover:text-white">HOME</a>
          <a href="/services" className="hover:text-white">SERVICES</a>
          <a href="/casestudies" className="hover:text-white">CASE STUDIES</a>
          <a href="/blog" className="hover:text-white">BLOGS</a>
          <a href="/privacy" className="hover:text-white">PRIVACY POLICY</a>
        </div>
      </div>

      {/* ALOHA Text & Image Area */}
      <div className="relative w-full overflow-hidden flex pt-8 pb-0">
        
        {/* Right side black background block */}
        <div className="absolute right-0 top-0 bottom-0 w-[25%] md:w-[35%] bg-[#101010] z-0"></div>

        {/* Huge ALOHA Text */}
        <div className="w-full flex relative z-10 pl-6 md:pl-12">
          <h1 className="text-[12rem] md:text-[23rem] lg:text-[28rem] font-antonio font-bold leading-[0.75] tracking-tighter text-[#101010] uppercase m-0 p-0 text-left">
            ALOHA<span className="text-[#FAFAFA]">!</span>
          </h1>
          
          {/* Overlapping Image Container */}
          <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-1/3 md:w-1/2 lg:w-[45%] max-w-[800px] z-20">
            <img 
              src="/src/assets/images/aloha/Scene 13 2.png" 
              alt="Aloha Hero Mockup" 
              className="w-full h-auto object-contain transform origin-center"
            />
          </div>
        </div>
      </div>

      {/* COMPANY FORMATION Banner */}
      <div className="w-full bg-[#02612B] flex items-center px-6 md:px-12 py-4 md:py-6 text-[#FAFAFA]">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-antonio font-bold tracking-tighter uppercase m-0 shrink-0">
          COMPANY FORMATION
        </h2>
        <div className="grow flex items-center ml-6 md:ml-12 pr-4">
          <div className="w-full h-1 md:h-[6px] bg-white"></div>
          <div className="w-6 h-6 md:w-8 md:h-8 border-t-4 border-r-4 md:border-t-6 md:border-r-6 border-white transform rotate-45 -ml-1 md:-ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
