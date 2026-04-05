const FooterSection = () => {
  return (
    <div className="w-full flex flex-col font-manrope">
      
      {/* PLAY Banner */}
      <div className="w-full bg-[#101010] min-h-[30vh] md:min-h-[40vh] flex items-end px-6 md:px-12 pb-6 md:pb-12 text-[#FAFAFA]">
        <h2 className="text-7xl md:text-[10rem] lg:text-[14rem] font-antonio font-bold uppercase leading-[0.85] tracking-tighter">
          PLAY
        </h2>
      </div>

      {/* Footer Content */}
      <div className="w-full bg-[#E2E2E2] flex flex-col md:flex-row items-center md:items-stretch justify-between relative overflow-hidden">
        
        {/* Left - Red Panda Network */}
        <div className="w-full md:w-5/12 px-6 md:px-12 py-16 md:py-24 flex items-center relative z-10">
          <h2 className="text-[6rem] md:text-[8rem] lg:text-[11.5rem] font-antonio font-bold text-[#A62226] uppercase leading-[0.75] tracking-tighter">
            RED<br/>PANDA<br/>NETWORK
          </h2>
        </div>

        {/* Middle - Links */}
        <div className="w-full md:w-2/12 flex flex-col items-center md:items-start justify-center space-y-1 font-manrope font-semibold text-[#A62226] text-[11px] md:text-[13px] relative z-10 pb-12 md:pb-0 tracking-wide">
          <a href="/" className="hover:text-[#101010] transition-colors">Home</a>
          <a href="/casestudies" className="hover:text-[#101010] transition-colors">Case Studies</a>
          <a href="/services" className="hover:text-[#101010] transition-colors">Services</a>
          <a href="/blog" className="hover:text-[#101010] transition-colors">Blogs</a>
          <a href="/privacy" className="hover:text-[#101010] transition-colors">Privacy & Policy</a>
        </div>

        {/* Right - Image block */}
        <div className="w-full md:w-[35%] bg-[#9A9A9A] flex items-center justify-center p-8 md:p-12 mb-10 md:mb-0 md:mr-10 md:mt-10 md:mb-10 min-h-[300px]">
          <img 
            src="/assets/images/aloha/Image Container.png" 
            alt="Device Mockup" 
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
        
      </div>
    </div>
  );
};

export default FooterSection;
