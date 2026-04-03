import { InstagramIcon, FaceboookIcon, LinkedinIcon } from "../../icons.tsx";

const HeroSection = () => {
  return (
    <section className="w-full relative flex p-4 bg-[#101010] min-h-screen h-225 overflow-hidden">
      
      {/* Scroll Down - Far Left Outside Border */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30">
        <img 
          src="/src/assets/svg/Frame 2087328155.svg" 
          alt="Scroll Down" 
          className="h-[300px] md:h-[370px] w-auto relative top-[3px] left-[-23px]"
        />
      </div>

      {/* Main Content Wrapper (Inside the Border) */}
      <div className="relative w-full flex flex-col items-center">
        
        {/* The Orange Cutted Border (Subtract.svg) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 1883 1087" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <mask id="path-1-inside-1_3349_5091_hero" fill="white">
              <path d="M254.666 22C254.666 34.1503 264.516 44 276.666 44H1606C1618.15 44 1628 34.1503 1628 22C1628 9.84974 1637.85 0 1650 0H1828C1858.19 0 1882.67 24.4751 1882.67 54.6667V254C1882.67 272.042 1868.04 286.667 1850 286.667C1831.96 286.667 1817.33 301.292 1817.33 319.333V768.667C1817.33 786.708 1831.96 801.333 1850 801.333C1868.04 801.333 1882.67 815.958 1882.67 834V1032C1882.67 1062.19 1858.19 1086.67 1828 1086.67H54.6666C24.4751 1086.67 0 1062.19 0 1032V829.333C0 813.869 12.536 801.333 28 801.333C43.464 801.333 56 788.797 56 773.333V314.667C56 299.203 43.464 286.667 28 286.667C12.536 286.667 0 274.131 0 258.667V54.6667C0 24.4751 24.4751 0 54.6667 0H232.666C244.816 0 254.666 9.84974 254.666 22Z"/>
            </mask>
            <path d="M276.666 44V45.3333H1606V44V42.6667H276.666V44ZM1650 0V1.33333H1828V0V-1.33333H1650V0ZM1882.67 54.6667H1881.33V254H1882.67H1884V54.6667H1882.67ZM1817.33 319.333H1816V768.667H1817.33H1818.67V319.333H1817.33ZM1882.67 834H1881.33V1032H1882.67H1884V834H1882.67ZM1828 1086.67V1085.33H54.6666V1086.67V1088H1828V1086.67ZM0 1032H1.33333V829.333H0H-1.33333V1032H0ZM56 773.333H57.3333V314.667H56H54.6667V773.333H56ZM0 258.667H1.33333V54.6667H0H-1.33333V258.667H0ZM54.6667 0V1.33333H232.666V0V-1.33333H54.6667V0ZM232.666 0V1.33333C244.08 1.33333 253.333 10.5861 253.333 22H254.666H255.999C255.999 9.11336 245.553 -1.33333 232.666 -1.33333V0ZM0 54.6667H1.33333C1.33333 25.2115 25.2115 1.33333 54.6667 1.33333V0V-1.33333C23.7387 -1.33333 -1.33333 23.7387 -1.33333 54.6667H0ZM28 286.667V285.334C13.2724 285.334 1.33333 273.395 1.33333 258.667H0H-1.33333C-1.33333 274.867 11.7996 288 28 288V286.667ZM56 314.667H57.3333C57.3333 298.467 44.2004 285.334 28 285.334V286.667V288C42.7276 288 54.6667 299.939 54.6667 314.667H56ZM28 801.333V802.666C44.2004 802.666 57.3333 789.533 57.3333 773.333H56H54.6667C54.6667 788.061 42.7276 800 28 800V801.333ZM0 829.333H1.33333C1.33333 814.605 13.2724 802.666 28 802.666V801.333V800C11.7996 800 -1.33333 813.133 -1.33333 829.333H0ZM54.6666 1086.67V1085.33C25.2114 1085.33 1.33333 1061.46 1.33333 1032H0H-1.33333C-1.33333 1062.93 23.7387 1088 54.6666 1088V1086.67ZM1882.67 1032H1881.33C1881.33 1061.46 1857.45 1085.33 1828 1085.33V1086.67V1088C1858.93 1088 1884 1062.93 1884 1032H1882.67ZM1850 801.333V802.666C1867.3 802.666 1881.33 816.695 1881.33 834H1882.67H1884C1884 815.222 1868.78 800 1850 800V801.333ZM1817.33 768.667H1816C1816 787.444 1831.22 802.666 1850 802.666V801.333V800C1832.69 800 1818.67 785.971 1818.67 768.667H1817.33ZM1850 286.667V285.334C1831.22 285.334 1816 300.556 1816 319.333H1817.33H1818.67C1818.67 302.029 1832.69 288 1850 288V286.667ZM1882.67 254H1881.33C1881.33 271.305 1867.3 285.334 1850 285.334V286.667V288C1868.78 288 1884 272.778 1884 254H1882.67ZM1828 0V1.33333C1857.45 1.33333 1881.33 25.2115 1881.33 54.6667H1882.67H1884C1884 23.7387 1858.93 -1.33333 1828 -1.33333V0ZM1628 22H1629.33C1629.33 10.5861 1638.59 1.33333 1650 1.33333V0V-1.33333C1637.11 -1.33333 1626.67 9.11336 1626.67 22H1628ZM1606 44V45.3333C1618.89 45.3333 1629.33 34.8866 1629.33 22H1628H1626.67C1626.67 33.4139 1617.41 42.6667 1606 42.6667V44ZM276.666 44V42.6667C265.252 42.6667 255.999 33.4139 255.999 22H254.666H253.333C253.333 34.8866 263.779 45.3333 276.666 45.3333V44Z" fill="#FF6200" mask="url(#path-1-inside-1_3349_5091_hero)"/>
          </svg>
        </div>

        {/* Top Exposure Effect */}
        <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-screen z-10 pointer-events-none opacity-80">
           <img 
             src="/src/assets/images/dronket/TopExposure.png" 
             alt="Exposure top" 
             className="w-full h-auto"
           />
        </div>

        {/* Header - Inside Border */}
        <div className="w-full flex justify-between items-center py-6 px-10 md:px-16 z-20 font-k2d text-[#FAFAFA] text-xl uppercase tracking-wide">
          <button className="hover:text-[#FF6200] transition-colors font-light">Contact Us</button>
          <button className="hover:text-[#FF6200] transition-colors font-light">Menu</button>
        </div>

        {/* Symmetrical Description Headers */}
        <div className="w-full flex justify-between gap-12 mt-12 px-16 md:px-24 z-10 text-[#FF6200] ">
          <div className="max-w-[200px] ">
            <p className="text-[10px] md:text-[11px] font-k2d leading-[2.5] uppercase opacity-80">
              Convert Environments Into<br/>
              Engaging 3D Digital Models To<br/>
              Enhance Planning And<br/>
              Visualization Of Landscapes And<br/>
              Buildings.
            </p>
          </div>
          <div className="max-w-[200px] text-right">
            <p className="text-[10px] md:text-[11px] font-k2d leading-[2.5] uppercase opacity-80">
              Convert Environments Into<br/>
              Engaging 3D Digital Models To<br/>
              Enhance Planning And<br/>
              Visualization Of Landscapes And<br/>
              Buildings.
            </p>
          </div>
        </div>

        {/* Title branding (REDPANDA NETWORK) */}
        <div className="relative w-full flex flex-col items-center mt-4 z-10 font-big-shoulders uppercase select-none">
          <div className="text-[10rem] md:text-[16rem] lg:text-[20rem] text-[#FF6200] leading-[0.75]">
             REDPANDA
          </div>

          {/* Drontek Tag Intersecting */}
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 z-30 bg-[#101010] border border-white/10 px-8 py-2 rounded-full shadow-[0_0_20px_rgba(255,98,0,0.15)]">
             <span className="text-[#FAFAFA] text-sm md:text-xl font-k2d font-bold tracking-[0.2em]">DRONTEK CASE STUDY</span>
          </div>

          <div className="text-[10rem] md:text-[16rem] lg:text-[20rem] text-[#FAFAFA] leading-[0.75] -mt-4 md:-mt-10">
             NETWORK
          </div>
        </div>

        {/* Social Sidebar (Right Side Inside) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
          <div className="p-2 border border-[#FF6200] rounded-lg hover:bg-[#FF6200]/10 transition-all cursor-pointer">
            <InstagramIcon width={20} height={20} color="#FF6200" />
          </div>
          <div className="p-2 border border-[#FF6200] rounded-lg hover:bg-[#FF6200]/10 transition-all cursor-pointer">
            <FaceboookIcon width={20} height={20} color="#FF6200" />
          </div>
          <div className="p-2 border border-[#FF6200] rounded-lg hover:bg-[#FF6200]/10 transition-all cursor-pointer">
            <LinkedinIcon width={20} height={20} color="#FF6200" />
          </div>
        </div>

        {/* Drone Composition overlapping Bottom Border */}
        <div className="relative w-full max-w-[1000px] -mt-32 md:-mt-48 z-20 pointer-events-none drop-shadow-[0_50px_50px_rgba(0,0,0,0.9)] flex justify-center">
           <img 
             src="/src/assets/images/dronket/HeroDron.png" 
             alt="Hero Drone" 
             className="w-[110%] h-auto scale-110"
           />
        </div>

        {/* Bottom Ornaments (+) */}
        <div className="w-full flex justify-between px-10 md:px-20 pb-10 z-20 -mt-8 md:-mt-16">
          {/* Left ( + ) */}
          <div className="flex items-center gap-2">
            <img src="/src/assets/svg/Ellipse 262.svg" alt="shape" className="w-10 md:w-16 h-auto scale-x-[-1]" />
            <img src="/src/assets/svg/Star 8.svg" alt="star" className="w-8 md:w-12 h-auto" />
            <img src="/src/assets/svg/Ellipse 262.svg" alt="shape" className="w-10 md:w-16 h-auto" />
          </div>
          {/* Right ( + ) */}
          <div className="flex items-center gap-2">
            <img src="/src/assets/svg/Ellipse 262.svg" alt="shape" className="w-10 md:w-16 h-auto scale-x-[-1]" />
            <img src="/src/assets/svg/Star 8.svg" alt="star" className="w-8 md:w-12 h-auto" />
            <img src="/src/assets/svg/Ellipse 262.svg" alt="shape" className="w-10 md:w-16 h-auto" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
