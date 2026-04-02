
const ClientProblems = () => {
  return (
    <div className="w-full flex flex-col bg-[#E2E2E2]">
      {/* Banner */}
      <div className="w-full bg-[#02612B] py-16 md:py-24 flex items-center justify-center">
        <h2 className="font-old-english text-6xl md:text-8xl lg:text-[10rem] text-[#FAFAFA] tracking-tight">
          Client Problems
        </h2>
      </div>
      
      {/* Text Columns */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 px-6 md:px-12 pt-12 text-sm md:text-[15px] font-semibold leading-relaxed tracking-wider font-lufga text-[#101010] text-justify">
        <p className="flex-1">
          ALOHA COMPANY FORMATION APPROACHED US WITH A FRAGMENTED DIGITAL PRESENCE THAT DIDN'T REFLECT THE CREDIBILITY OR UNIQUENESS OF REGISTERING A COMPANY UNDER THE SOVEREIGN NATION OF HAWAI'I. THEIR SERVICE OFFERING WAS VALUABLE BUT COMPLEX, AND THE PREVIOUS WEBSITE FAILED TO COMMUNICATE THE PROCESS CLEARLY, CAUSING CONFUSION FOR POTENTIAL CLIENTS.
        </p>
        <p className="flex-1">
          THE BRAND ALSO STRUGGLED TO BUILD TRUST BECAUSE THEIR AUTHORISATIONS, PARTNERSHIPS, AND SERVICE LEGITIMACY WERE NOT SHOWCASED EFFECTIVELY. ADDITIONALLY, THE USER JOURNEY LACKED STRUCTURE, MAKING IT DIFFICULT FOR VISITORS TO UNDERSTAND THE BENEFITS, EXPLORE SERVICES, OR TAKE ACTION. OVERALL, THE EXISTING DIGITAL EXPERIENCE WAS NOT ALIGNED WITH THE EXPECTATIONS OF INTERNATIONAL ENTREPRENEURS, RESULTING IN LOW ENGAGEMENT AND LIMITED CONVERSIONS.
        </p>
      </div>
    </div>
  );
};

export default ClientProblems;
