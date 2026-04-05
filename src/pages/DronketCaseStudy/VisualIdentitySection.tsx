
const VisualIdentitySection = () => {
  return (
    <section className="w-full h-225 relative py-24 flex flex-col justify-center items-center overflow-hidden">
      <img src="/assets/images/dronket/DiagonalExposure.png" alt="" className="absolute top-0 left-0 w-screen object-cover" />
      {/* Background glow & Parentheses */}
      <div className="absolute top-10 right-10 flex items-center gap-2">
        <img src="/assets/svg/Ellipse 262.svg" alt="shape" className="w-5 md:w-10 h-auto" />
        <img src="/assets/svg/Ellipse 262.svg" alt="shape" className="w-5 md:w-10 h-auto" />
        <img src="/assets/svg/Star 8.svg" alt="star" className="w-5 md:w-16 h-auto" />
        <img src="/assets/svg/Ellipse 262.svg" alt="shape" className="w-5 md:w-10 h-auto scale-x-[-1]" />
      </div>
      <div className="absolute bottom-10 left-10 flex items-center gap-2">
        <img src="/assets/svg/Ellipse 262.svg" alt="shape" className="w-5 md:w-10 h-auto" />
        <img src="/assets/svg/Star 8.svg" alt="star" className="w-5 md:w-16 h-auto" />
        <img src="/assets/svg/Ellipse 262.svg" alt="shape" className="w-5 md:w-10 h-auto scale-x-[-1]" />
        <img src="/assets/svg/Ellipse 262.svg" alt="shape" className="w-5 md:w-10 h-auto scale-x-[-1]" />
      </div>

      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] aspect-square rounded-full bg-[#FF6200] opacity-10 blur-[150px] pointer-events-none z-0"></div> */}

      {/* Typography */}
      <div className="relative font-big-shoulders font-extrabold text-[8rem] md:text-[14rem] lg:text-[18rem] uppercase leading-[0.75] tracking-tighter text-center z-10 flex flex-col items-center">
        <h2 className="text-[#FF6200] z-10 mb-8">VISUAL</h2>
        <h2 className="text-[#FAFAFA] z-10">IDENTITY</h2>

        {/* Overlapping Drone */}
        <div className="absolute top-[60%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] z-20 pointer-events-none drop-shadow-[0_20px_40px_rgba(255,98,0,0.2)]">
          <img
            src="/assets/images/dronket/5thSectionDron.png"
            alt="Drone overlapping Visual Identity"
            className="w-[60%] h-auto object-contain scale-110 md:scale-125 translate-x-5 -translate-y-10"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualIdentitySection;
