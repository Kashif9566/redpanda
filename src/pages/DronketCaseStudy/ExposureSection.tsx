const ExposureSection = () => {
  return (
    <section className="w-full relative overflow-hidden flex flex-col items-center">

      {/* Abstract overlapping images layout */}
      <div className="relative w-full h-225 bg-center bg-no-repeat bg-contain">
        <img src="/src/assets/images/dronket/TopExposure.png" alt="top exposure" className="w-screen" />
        <p className="text-[#FF6200] w-[60vw] text-right text-[1rem] font-outfit absolute top-[10%] right-[10%]">Convert environments into  engaging 3D digital models to enhance planning and visualization of landscapes and buildings.Convert environments into Convert environments into  engaging 3D digital models to enhance planning and visualization of landscapes and buildings.Convert environments into Convert environments into  engaging 3D digital models to enhance planning and visualization of landscapes and buildings.Convert environments into Convert environments into  engaging 3D digital models to enhance planning and visualization of landscapes and buildings.Convert environments into </p>
        

        {/* Text Block on the right */}
        <div className="absolute bottom-[10%] left-[10%] text-left font-big-shoulders font-extrabold tracking-tighter uppercase leading-[1] z-30">
          <p className="text-[2.5rem] md:text-[5rem] text-[#FAFAFA]">
            <span className="opacity-0">XX</span> THE SOLUTION WE PROVIDED<br />
            TEXT FOR THE CLIENT PROBLEMS<br />
            <span className="opacity-0">X</span> SOLUTION WE PROVIDED<br />
            <span className="text-[#FF6200]">THIS IS PLACEHOLDER</span>
          </p>
        </div>
      </div>

      <div className=" relative w-full h-225 bg-center bg-no-repeat bg-contain">
        <img src="/src/assets/images/dronket/TopExposure.png" alt="bottom exposure" className="w-screen" />
      {/* Top Left Image */}
        <img 
          src="/src/assets/images/dronket/4thSectionTopLeft.png" 
          alt="Top Left Interface" 
          className="absolute top-[0%] left-[0%] w-screen rotate-0 rounded-lg shadow-2xl z-10"
        />
        
        <img 
          src="/src/assets/images/dronket/4thSectionBottomRight.png" 
          alt="Bottom Right Interface" 
          className="absolute bottom-[0%] right-[0%] w-screen rotate-0 rounded-lg shadow-2xl z-20"
        />

        {/* Text Block on the right */}
        <div className="absolute bottom-[10%] left-[10%] text-left font-big-shoulders font-extrabold tracking-tighter uppercase leading-[1] z-30">
          <p className="text-[2.5rem] md:text-[3.5rem] text-[#FAFAFA]">
            <span className="opacity-0">XX</span> THE SOLUTION WE PROVIDED<br />
            TEXT FOR THE CLIENT PROBLEMS<br />
            <span className="opacity-0">X</span> SOLUTION WE PROVIDED<br />
            <span className="text-[#FF6200]">THIS IS PLACEHOLDER</span>
          </p>
        </div>

        {/* Text Block on the right */}
        <div className="absolute top-[10%] right-[10%] text-left font-big-shoulders font-extrabold tracking-tighter uppercase leading-[1] z-30">
          <p className="text-[2.5rem] md:text-[3.5rem] text-[#FAFAFA]">
            <span className="opacity-0">X</span> THE SOLUTION WE PROVIDED<br />
            TEXT FOR THE CLIENT PROBLEMS<br />
            <span className="opacity-0">XXXXX</span> SOLUTION WE PROVIDED<br />
            <span className="opacity-0">XXXXXXXXX</span> <span className="text-[#FF6200]">THIS IS PLACEHOLDER</span>
          </p>
        </div>

        <img src="/src/assets/images/dronket/DiagonalExposure.png" alt="bottom exposure" className="absolute bottom-0 left-0 w-screen h-full rotate-y-[-180deg]" />

      </div>

    </section>
  );
};

export default ExposureSection;
