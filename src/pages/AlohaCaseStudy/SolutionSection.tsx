
const SolutionSection = () => {
  return (
    <div className="w-full bg-[#E2E2E2] flex items-center justify-center py-16 px-4 md:px-12 relative overflow-hidden">

      {/* Book Container */}
      <div className="relative w-full max-w-[1400px] aspect-[1.1] md:aspect-[1.4] flex z-10">

        {/* Book Background */}
        <img
          src="/assets/images/aloha/open-book-blank-white-pages 1.png"
          alt="Open Book Background"
          className="absolute inset-0 w-full h-full object-fill z-0 drop-shadow-2xl"
        />

        {/* Left Page (Text Area) */}
        <div className="absolute top-[8%] left-[7%] w-[38%] h-[85%] flex flex-col z-10">

         {/* Action Row */}
          <div className="flex flex-col gap-1 mb-4 md:mb-8 pt-4 w-[15vw] absolute top-10 right-16">
            <span className="text-[7px] md:text-[9px] font-bold leading-tight font-manrope tracking-widest text-[#101010]">
              YOU CAN VIEW THE DESIGN FILE FOR BETTER UNDERSTANDING OF WHAT WE DELIVERED TO THE CLIENT.
            </span>
            <button className="w-full bg-[#02612B] hover:bg-[#024d22] transition-colors text-white text-[9px] md:text-xs font-bold py-2 md:py-3 px-4 md:px-15 flex items-center font-manrope uppercase tracking-wider shrink-0">
              <span>
                VIEW DESIGN
              </span>
            </button>
          </div>
          {/* Title */}
          <div className="font-antonio font-bold uppercase leading-none tracking-tighter text-4xl md:text-6xl lg:text-[8.5rem] flex flex-col mb-6">
            <span className="text-[#D8A52D]">THE</span>
            <span className="text-[#D8A52D]">SOLUTION</span>
            <span className="text-[#D8A52D] whitespace-nowrap">BY US<span className="text-xl md:text-3xl lg:text-4xl ml-2">.</span></span>
          </div>

          <div className="text-[7px] md:text-[9px] font-bold leading-tight font-manrope tracking-widest text-gray-500 mb-6 uppercase flex xl:justify-end xl:-mt-10 lg:pr-12">
            RED PANDA NETWORK
          </div>

          {/* Dropcap Paragraph */}
          <div className="relative font-bold leading-relaxed tracking-wider font-lufga text-[#101010] text-[6px] md:text-[9px] lg:text-[11px] text-justify mt-2 md:mt-4 w-[25vw]">
            <div className="float-left text-4xl md:text-6xl lg:text-[5.5rem] font-bold font-antonio leading-[0.7] mr-2 md:mr-3 text-[#101010]">
              W
            </div>
            <p className="mb-2 md:mb-4">
              E COMPLETELY REBUILT ALOHA'S DIGITAL PRESENCE WITH A CLEAR, MODERN, AND TRUSTWORTHY DESIGN THAT EXPLAINS THEIR SERVICES IN A SIMPLE, STRUCTURED WAY.
            </p>
            <p className="mt-8">
              THE NEW WEBSITE HIGHLIGHTS THEIR OFFICIAL AUTHORISATIONS, SHOWCASES THE BENEFITS OF FORMING A COMPANY UNDER THE SOVEREIGN NATION OF HAWAI'I, AND PRESENTS THE FULL PROCESS WITH CLARITY. WE STRENGTHENED THEIR VISUAL IDENTITY WITH HAWAIIAN-INSPIRED ELEMENTS AND IMPROVED USABILITY ACROSS ALL DEVICES, CREATING A FAST, CREDIBLE, AND CONVERSION-FOCUSED PLATFORM THAT HELPS INTERNATIONAL CLIENTS UNDERSTAND THE SERVICE AND TAKE ACTION CONFIDENTLY.
            </p>
          </div>
        </div>

        {/* Right Page (Image area) */}
        <div className="absolute bottom-4 right-4 w-[90vh] h-[90%] flex items-center justify-center z-10 opacity-90">
          <img
            src="/assets/images/aloha/Frame 2087328104.png"
            alt="Aloha Solution Screens"
            className="w-full h-full object-contain opacity-90 mix-blend-multiply mix-blend-darken"
          />
        </div>

      </div>
    </div>
  );
};

export default SolutionSection;
