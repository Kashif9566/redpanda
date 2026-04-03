const BrandAssetsSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 px-6 md:px-12">
      
      {/* Typography Block */}
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row justify-between mb-32 border-t border-[#333] pt-12 relative">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col">
          <div className="font-outfit text-[#808080] text-xs font-semibold mb-4 tracking-widest uppercase">
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz<br/>
            0 1 2 3 4 5 6 7 8 9
          </div>
          <h2 className="font-big-shoulders text-[6rem] md:text-[9rem] text-[#FAFAFA] uppercase leading-[0.8] tracking-tighter">
            TYPO<br/>GRAPHY
          </h2>
        </div>

        {/* Center: Font Weights List */}
        <div className="flex flex-col mt-12 md:mt-0 font-outfit text-xs space-y-6 md:ml-12 pt-4">
          <div className="flex gap-12">
             <div className="flex flex-col text-[#FF6200] space-y-3 font-outfit text-[10px]">
                <span className="opacity-50">THIN</span>
                <span className="opacity-50">EXTRA LIGHT</span>
                <span className="opacity-50">LIGHT</span>
                <span>REGULAR</span>
                <span>MEDIUM</span>
             </div>
             <div className="flex flex-col text-[#FF6200] space-y-3 font-outfit text-[10px] font-bold">
                <span>SEMI BOLD</span>
                <span>BOLD</span>
                <span>EXTRA BOLD</span>
                <span>BLACK</span>
             </div>
          </div>
        </div>

        {/* Right Side: Font Name */}
        <div className="flex flex-col items-end mt-12 md:mt-0 pt-4">
           <h2 className="font-big-shoulders text-[4rem] md:text-[6rem] text-[#FF6200] uppercase leading-[0.8] text-right tracking-tighter">
             BIG<br/>SHOULDERS<br/>DISPLAY
           </h2>
        </div>
      </div>

      {/* Colors Block */}
      <div className="w-full max-w-[800px] flex flex-col items-center relative">
         <div className="absolute top-[20%] left-[-10%] text-[#FF6200] z-0 opacity-50">
            <img src="/src/assets/svg/Star 8.svg" alt="star" className="w-12 h-12" />
         </div>
         <div className="absolute top-[20%] right-[-10%] text-[#FF6200] z-0 opacity-50">
            <img src="/src/assets/svg/Star 8.svg" alt="star" className="w-12 h-12" />
         </div>

         <h2 className="font-big-shoulders text-[6rem] md:text-[9rem] text-[#FF6200] uppercase leading-[0.8] text-center mb-10 z-10 tracking-tighter">
            COLORS<br/>USED
         </h2>

         {/* Palette Row */}
         <div className="flex w-full justify-center gap-2 md:gap-4 z-10">
            {/* Box 1 */}
            <div className="w-[30%] aspect-square bg-[#FF6200] rounded-xl flex items-end p-4">
              <span className="font-outfit text-[10px] text-white font-semibold tracking-wider">FF6200 O</span>
            </div>
            {/* Box 2 */}
            <div className="w-[30%] aspect-square bg-[#FAFAFA] rounded-xl flex items-end p-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
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
