const ExposureSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 relative overflow-hidden flex flex-col items-center">
      
      {/* Abstract overlapping images layout */}
      <div className="relative w-full max-w-[1200px] h-[600px] md:h-[800px] bg-center bg-no-repeat bg-contain" style={{ backgroundImage: "url('/src/assets/images/dronket/DiagonalExposure.png')" }}>
        
        {/* Top Left Image */}
        <img 
          src="/src/assets/images/dronket/4thSectionTopLeft.png" 
          alt="Top Left Interface" 
          className="absolute top-[10%] left-[5%] w-[40%] -rotate-12 rounded-lg shadow-2xl z-10"
        />
        
        {/* Bottom Right Image */}
        <img 
          src="/src/assets/images/dronket/4thSectionBottomRight.png" 
          alt="Bottom Right Interface" 
          className="absolute bottom-[10%] right-[5%] w-[45%] -rotate-12 rounded-lg shadow-2xl z-20"
        />
        
        {/* Angled EXPLORE text */}
        <div className="absolute right-[5%] top-[60%] font-big-shoulders text-[6rem] md:text-[10rem] text-[#FAFAFA] font-bold -rotate-24 transform translate-y-12">
           EXPLORE
        </div>

        {/* Text Block on the right */}
        <div className="absolute top-[5%] md:top-[15%] right-0 md:right-[15%] text-right font-big-shoulders tracking-tighter uppercase leading-[0.8] z-30">
          <p className="text-[2.5rem] md:text-[4rem] text-[#FAFAFA]">
            THE SOLUTION WE PROVIDED<br/>
            TEXT FOR THE CLIENT PROBLEMS<br/>
            SOLUTION WE PROVIDED<br/>
            <span className="text-[#FF6200]">THIS IS PLACEHOLDER</span>
          </p>
        </div>
      </div>

    </section>
  );
};

export default ExposureSection;
