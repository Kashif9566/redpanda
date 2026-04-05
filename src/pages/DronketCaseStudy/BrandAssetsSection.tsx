const BrandAssetsSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center">

      {/* Typography Block */}
      <div className="py-12 px-32 w-full flex flex-col md:flex-row justify-between mb-32 pt-12 relative">

        {/* Left Side: Typography */}
        <div className="flex flex-col">
          <div className="font-big-shoulders text-[white] text-2xl font-semibold mb-4 tracking-[0.05rem] uppercase w-[30vw]">
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
            0 1 2 3 4 5 6 7 8 9
          </div>
          <h2 className="mt-[6rem] font-big-shoulders text-[6rem] md:text-[18rem] font-extrabold text-[#FAFAFA] uppercase leading-[0.9] tracking-[-0.01rem]">
            TYPO<br />GRAPHY
          </h2>
        </div>

        {/* Center: Font Weights List */}
        <div className="absolute bottom-10 right-10 flex flex-col mt-12 md:mt-0 font-big-shoulders text-2xl space-y-6 md:ml-12 pt-4">
          <div className="flex gap-12 items-end">
            <div className="flex flex-col text-[#FF6200] space-y-3 -tracking-tighter">
              <span className="opacity-50">THIN</span>
              <span className="opacity-50">EXTRA LIGHT</span>
              <span className="opacity-50">LIGHT</span>
              <span>REGULAR</span>
              <span>MEDIUM</span>
            </div>
            <div className="flex flex-col text-[#FF6200] space-y-3 font-bold">
              <span>SEMI BOLD</span>
              <span>BOLD</span>
              <span>EXTRA BOLD</span>
              <span>BLACK</span>
            </div>
          </div>
        </div>

        {/* Right Side: Font Name */}
        <div className="flex flex-col items-end mt-12 md:mt-0 pt-4">
          <h2 className="font-big-shoulders text-[4rem] md:text-[9rem] font-extrabold text-[#FF6200] uppercase leading-[0.9] text-right tracking-[0.01rem]">
            BIG<br />SHOULDERS<br />DISPLAY
          </h2>
        </div>
      </div>

      {/* Colors Block */}
      <div className="w-full h-200 flex flex-col justify-end items-center relative">
        <img src="/assets/images/dronket/HorizontalExposure.png" alt="star" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[20%] left-[20%] text-[#FF6200] z-0">
          <img src="/assets/svg/Frame 2087328190.svg" alt="star" className="w-24 h-24" />
        </div>
        <h2 className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[400px] font-big-shoulders text-[6rem] md:text-[19rem] font-extrabold uppercase leading-[0.8] text-center z-10 tracking-tighter">
          <span className="mb-4 text-[#FF6200]">COLORS</span> <span className="text-[#FAFAFA]">USED</span>
        </h2>
        <div className="absolute top-[20%] right-[20%] text-[#FF6200] z-0">
          <img src="/assets/svg/Frame 2087328190.svg" alt="star" className="w-24 h-24" />
        </div>

        {/* Palette Row */}
        <div className="flex w-full justify-center items-end gap-2 md:gap-4 z-10">
          {/* Box 1 */}
          <div className="w-[30%] aspect-square bg-[#FF6200] rounded-xl flex items-end p-4">
            <span className="font-outfit text-[10px] text-white font-semibold tracking-wider">FF6200 O</span>
          </div>
          {/* Box 2 */}
          <div className="w-[30%] h-[200px] aspect-square bg-[#FAFAFA] rounded-xl flex items-end p-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <span className="font-outfit text-[10px] text-[#101010] font-semibold tracking-wider">FAFAFA O</span>
          </div>
          {/* Box 3 */}
          <div className="w-[30%] aspect-square bg-[#101010] border border-[#333] rounded-xl flex items-end p-4">
            <span className="font-outfit text-[10px] text-[#FAFAFA] font-semibold tracking-wider opacity-50">101010 O</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BrandAssetsSection;
