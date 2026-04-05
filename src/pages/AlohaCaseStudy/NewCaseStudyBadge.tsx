
const NewCaseStudyBadge = () => {
  return (
    <div className="bg-[#02612B] flex flex-col items-center px-2 pt-4 pb-2 w-[70px] md:w-[7vw] select-none shadow-sm">
      <div className="flex flex-col items-center leading-[0.9] text-white font-antonio font-bold text-[36px] md:text-[54px] tracking-tighter mb-1.5 w-full text-center scale-y-110 origin-bottom">
        <span>NEW</span>
        <span>CASE</span>
      </div>
      <div className="mt-2 bg-white w-full py-0.5 md:py-1 px-1 flex items-center justify-center -mb-0.5">
        <span className="text-[#842226] font-antonio font-bold text-[10px] md:text-[14px] tracking-[0.15em] md:tracking-[0.2em] uppercase origin-center translate-x-[0.1em]">
          STUDY
        </span>
      </div>
    </div>
  );
};

export default NewCaseStudyBadge;
