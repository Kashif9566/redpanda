
const IntroSection = () => {
  return (
    <div className="w-full relative flex flex-col md:flex-row items-center px-6 md:px-12 py-16 gap-12 bg-[#E2E2E2] overflow-hidden">
      
      {/* Right side dark grey background block */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] md:w-[65%] bg-[#6A6A6A] z-0"></div>

      {/* Left Column - Text */}
      <div className="w-full md:w-[35%] flex flex-col space-y-6 text-sm md:text-[15px] font-semibold leading-relaxed tracking-wider font-lufga text-[#101010] text-justify relative z-10">
        <p>
          ALOHA COMPANY FORMATION IS A PIONEERING SERVICE THAT ENABLES ENTREPRENEURS TO REGISTER THEIR COMPANIES UNDER THE INDEPENDENT & SOVEREIGN NATION OF HAWAI'I, OFFERING A UNIQUE JURISDICTION FOR ASSET PROTECTION, BUSINESS CREDIBILITY, AND GLOBAL OPERATIONS. ALONGSIDE COMPANY INCORPORATION, ALOHA ALSO ASSISTS FOUNDERS IN SECURING A DIGITAL BANKING ACCOUNT, MAKING IT POSSIBLE TO BUILD A FULLY OPERATIONAL INTERNATIONAL BUSINESS FROM ANYWHERE IN THE WORLD.
        </p>
        <p>
          OUR TASK WAS TO DESIGN AND DEVELOP A MODERN, TRUSTWORTHY, AND CULTURALLY GROUNDED DIGITAL PRESENCE THAT REFLECTS THE IDENTITY OF HAWAI'I WHILE HIGHLIGHTING ALOHA'S CREDIBILITY, GLOBAL REACH, AND SIMPLIFIED COMPANY FORMATION PROCESS.
        </p>
      </div>

      {/* Right Column - Desktop Mockup Image */}
      <div className="w-full md:w-[65%] flex justify-center md:justify-end relative z-10">
        <img 
          src="/assets/images/aloha/Frame 2087328098.png" 
          alt="Aloha Desktop Mockup" 
          className="w-full max-w-[900px] h-auto object-contain drop-shadow-2xl"
        />
      </div>
      
    </div>
  );
};

export default IntroSection;
