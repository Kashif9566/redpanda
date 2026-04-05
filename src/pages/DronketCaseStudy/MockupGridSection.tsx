
const MockupGridSection = () => {
  return (
    <section className="w-full pt-10 pb-0 md:pt-20 flex justify-center items-end overflow-hidden">
      <div className="flex flex-row justify-between items-end w-full max-w-screen">
        <img 
          src="/src/assets/images/dronket/2ndSectionStart.png" 
          alt="App Mockup Left" 
          className="w-[35%] md:w-[50%] object-contain -mr-[12%] md:-mr-[22%] z-0"
        />
        <img 
          src="/src/assets/images/dronket/2ndSecrionMiddle.png" 
          alt="App Mockup Center" 
          className="w-[40%] md:w-[60%] object-contain z-10"
        />
        <img 
          src="/src/assets/images/dronket/2ndSectionEnd.png" 
          alt="App Mockup Right" 
          className="w-[35%] md:w-[40%] object-contain -ml-[12%] md:-ml-[24%] z-0"
        />
      </div>
    </section>
  );
};

export default MockupGridSection;
