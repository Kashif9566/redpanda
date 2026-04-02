
const VisualIdentitySection = () => {
  return (
    <section className="w-full relative py-24 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background glow & Parentheses */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex items-center gap-1 text-[#FF6200] text-3xl font-light opacity-80 select-none z-0">
        <span>(</span><span className="text-4xl leading-none">+</span><span>)</span>
      </div>
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 flex items-center gap-1 text-[#FF6200] text-3xl font-light opacity-80 select-none z-0">
        <span>(</span><span className="text-4xl leading-none">+</span><span>)</span>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] aspect-square rounded-full bg-[#FF6200] opacity-10 blur-[150px] pointer-events-none z-0"></div>

      {/* Typography */}
      <div className="relative font-big-shoulders text-[8rem] md:text-[14rem] lg:text-[18rem] uppercase leading-[0.75] tracking-tighter text-center z-10 flex flex-col items-center">
        <h2 className="text-[#FF6200] z-10">VISUAL</h2>
        <h2 className="text-[#FAFAFA] z-30 ml-16 md:ml-32">IDENTITY</h2>
        
        {/* Overlapping Drone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] z-20 pointer-events-none drop-shadow-[0_20px_40px_rgba(255,98,0,0.2)]">
          <img 
            src="/src/assets/images/dronket/5thSectionDron.png" 
            alt="Drone overlapping Visual Identity" 
            className="w-[120%] h-auto object-contain scale-110 md:scale-125 translate-x-5 -translate-y-10"
          />
        </div>
      </div>
    </section>
  );
};

export default VisualIdentitySection;
