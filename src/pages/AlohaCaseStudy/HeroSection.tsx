import NewCaseStudyBadge from './NewCaseStudyBadge';

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col pt-6">
      {/* Top Header */}
      <div className="flex justify-between items-center w-full">
        {/* NEW CASE STUDY - Left */}
        <NewCaseStudyBadge />

        {/* Logo */}
        <div className="font-old-english text-6xl md:text-[8rem] tracking-tight text-[#101010]">
          Red Panda Network
        </div>

        {/* NEW CASE STUDY - Right */}
        <NewCaseStudyBadge />
      </div>

      {/* Ticker / Nav Bar */}
      <div className="mt-8 w-full bg-[#101010] text-[#FAFAFA] flex flex-col md:flex-row justify-between items-center px-6 py-3 text-xs md:text-[14px] font-antonio uppercase tracking-widest font-semibold">
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
      <div className="w-full flex py-6 relative">
        
        {/* Right side black background block */}
        <img src="/assets/images/aloha/Rectangle 574056825.png" alt="black background" className="absolute right-0 top-0 w-[25%] md:w-[20%] md:h-[49.3vh] z-0" />

        {/* Huge ALOHA Text */}
        <div className="w-full flex z-10">
          <h1 className="text-[12rem] md:text-[23rem] lg:text-[30rem] font-antonio font-bold leading-[0.75] tracking-tighter text-[#101010] uppercase text-left">
            ALOHA!
          </h1>
          
          {/* Overlapping Image Container */}
          <div className="absolute -bottom-10 right-[-8%] md:right-12 w-1/3 md:w-1/2 lg:w-[35%] max-w-[800px] z-20">
            <img 
              src="/assets/images/aloha/Scene 13 2.png" 
              alt="Aloha Hero Mockup" 
              className="w-full h-auto object-contain transform origin-center"
            />
          </div>
        </div>
      </div>

      {/* COMPANY FORMATION Banner */}
      <div className="mt-16 w-full bg-[#02612B] flex items-center px-6 md:px-12 py-4 md:py-6 text-[#FAFAFA]">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-lufga font-extrabold tracking-tighter uppercase m-0 shrink-0">
          COMPANY FORMATION
        </h2>
        <img src="/assets/svg/Arrow 23.svg" alt="arrow" className="w-[35vw] ml-[20px]" />
      </div>
    </div>
  );
};

export default HeroSection;
