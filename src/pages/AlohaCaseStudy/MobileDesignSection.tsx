
const MobileDesignSection = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 gap-12 bg-[#FAFAFA]">
      
      {/* Left Column - Mobile Mockup Image */}
      <div className="w-full md:w-[40%] flex justify-center md:justify-start">
        <img 
          src="/assets/images/aloha/Frame 2087328103.png" 
          alt="Aloha Mobile Mockup" 
          className="w-full max-w-[350px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Right Column - Text */}
      <div className="w-full md:w-[60%] flex flex-col space-y-8">
        <h2 className="text-4xl md:text-6xl font-antonio font-bold uppercase leading-[1.1] tracking-tight">
          <span className="text-[#101010]">ALOHA COMPANY FORMATION </span>
          <span className="text-[#02612B]">UI UX DESIGN & DEVELOPMENT</span>
        </h2>
        
        <div className="flex flex-col space-y-6 text-sm md:text-base font-semibold leading-relaxed tracking-wider font-manrope text-[#101010] text-justify">
          <p>
            ALOHA COMPANY FORMATION IS A PIONEERING SERVICE THAT ENABLES ENTREPRENEURS TO REGISTER THEIR COMPANIES UNDER THE INDEPENDENT & SOVEREIGN NATION OF HAWAI'I, OFFERING A UNIQUE JURISDICTION FOR ASSET PROTECTION, BUSINESS CREDIBILITY, AND GLOBAL OPERATIONS. ALONGSIDE COMPANY INCORPORATION, ALOHA ALSO ASSISTS FOUNDERS IN SECURING A DIGITAL BANKING ACCOUNT, MAKING IT POSSIBLE TO BUILD A FULLY OPERATIONAL INTERNATIONAL BUSINESS FROM ANYWHERE IN THE WORLD.
          </p>
          <p>
            OUR TASK WAS TO DESIGN AND DEVELOP A MODERN, TRUSTWORTHY, AND CULTURALLY GROUNDED DIGITAL PRESENCE THAT REFLECTS THE IDENTITY OF HAWAI'I WHILE HIGHLIGHTING ALOHA'S CREDIBILITY, GLOBAL REACH, AND SIMPLIFIED COMPANY FORMATION PROCESS.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default MobileDesignSection;
