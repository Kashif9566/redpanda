import { Copy } from 'lucide-react';

const ColorBox = ({ hex, bg, text }: { hex: string, bg: string, text: string }) => (
  <div className={`w-full aspect-4/3 ${bg} flex items-end justify-between p-4 ${text}`}>
    <span className="font-manrope font-bold text-lg md:text-xl tracking-wider">{hex}</span>
    <Copy className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
  </div>
);

const VisualIdentity = () => {
  return (
    <div className="w-full flex flex-col bg-[#FAFAFA]">
      {/* Banner */}
      <div className="w-full bg-[#02612B] py-16 md:py-24 flex items-center justify-center">
        <h2 className="font-old-english text-6xl md:text-8xl lg:text-[10rem] text-[#FAFAFA] tracking-tight">
          Visual Identity
        </h2>
      </div>

      <div className="px-6 md:px-12 py-16 md:py-24 w-full flex flex-col">
        {/* Typography Section */}
        <div className="w-full flex flex-col mb-24">
          {/* Huge Typography Graphic */}
          <div className="relative w-full flex items-center justify-center py-10 overflow-hidden">
            <div className="text-[12rem] md:text-[20rem] lg:text-[25rem] font-antonio font-bold text-[#101010] leading-[0.65] tracking-tighter w-full text-center select-none uppercase -mx-8">
              TYPOGRAPHY
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAFAFA] px-6 md:px-12 py-2 md:py-4">
              <span className="text-4xl md:text-7xl lg:text-9xl font-antonio font-bold text-[#101010] tracking-tighter uppercase">
                MANROPE
              </span>
            </div>
          </div>

          {/* Typography Details */}
          <div className="w-full flex flex-col md:flex-row justify-between mt-12 gap-12 font-manrope">
            {/* Weights */}
            <div className="flex gap-12 md:gap-24 text-xl md:text-3xl text-[#101010]">
              <div className="flex flex-col space-y-4">
                <span className="font-light">Thin</span>
                <span className="font-extralight">Extra Light</span>
                <span className="font-light">Light</span>
                <span className="font-normal">Regular</span>
              </div>
              <div className="flex flex-col space-y-4">
                <span className="font-medium">Medium</span>
                <span className="font-semibold">Semi Bold</span>
                <span className="font-bold">Bold</span>
                <span className="font-extrabold">Extra Bold</span>
              </div>
            </div>

            {/* Alphabet */}
            <div className="w-full md:w-1/2 text-2xl md:text-4xl leading-snug tracking-wide font-medium text-[#101010] flex flex-wrap max-w-2xl">
              AA BB CC DD EE FF GG HH II JJ KK LL MM NN OO PP QQ RR SS TT UU VV WW XX YY ZZ 0123456789
            </div>
          </div>
        </div>

        {/* Colors Used Section */}
        <div className="w-full flex flex-col md:flex-row justify-between pt-16 border-t-2 border-[#101010]/10 gap-12">
          {/* Left: COLORS USED */}
          <div className="w-full md:w-5/12 flex flex-col">
            <h2 className="text-7xl md:text-9xl lg:text-[11rem] font-antonio font-bold text-[#101010] leading-[0.85] tracking-tighter uppercase mb-8">
              COLORS<br/>USED
            </h2>
          </div>

          {/* Right: Color Grid */}
          <div className="w-full md:w-7/12 grid grid-cols-2">
            <ColorBox hex="02612B" bg="bg-[#02612B]" text="text-white" />
            <ColorBox hex="D8A52D" bg="bg-[#D8A52D]" text="text-white" />
            <ColorBox hex="FAFAFA" bg="bg-[#FAFAFA]" text="text-black" />
            <ColorBox hex="101010" bg="bg-[#101010]" text="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualIdentity;
