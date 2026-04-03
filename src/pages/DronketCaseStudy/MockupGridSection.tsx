
const MockupGridSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 relative overflow-hidden flex justify-center items-center">
      <div className="w-full max-w-[1200px] flex justify-center items-center gap-6 md:gap-10 perspective-[1000px]">
        <img 
          src="/src/assets/images/dronket/2ndSectionStart.png" 
          alt="App Mockup Left" 
          className="w-[30vw] max-w-[350px] -rotate-12 translate-y-24 object-contain shadow-xl"
        />
        <img 
          src="/src/assets/images/dronket/2ndSecrionMiddle.png" 
          alt="App Mockup Center" 
          className="w-[35vw] max-w-[450px] -rotate-12 z-10 -translate-y-12 object-contain drop-shadow-[0_25px_25px_rgba(255,98,0,0.15)]"
        />
        <img 
          src="/src/assets/images/dronket/2ndSectionEnd.png" 
          alt="App Mockup Right" 
          className="w-[30vw] max-w-[350px] -rotate-12 translate-y-32 object-contain shadow-xl"
        />
      </div>
    </section>
  );
};

export default MockupGridSection;
