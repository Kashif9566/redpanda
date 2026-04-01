import ScrollReveal from "../../components/animations/ScrollReveal";

const ServiceContent = () => {
  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-[140px] lg:h-230"
      style={{
        background:
          "radial-gradient(60% 60% at 0% 100%, rgba(43,14,16,0.85) 0%, rgba(20,20,20,0) 70%), linear-gradient(90deg, #1B1B1B 0%, #141414 55%, #2B0E10 100%)",
      }}
    >
      <div className="flex flex-col flex-1 px-4 sm:px-6 lg:px-[48px]">
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={5}
          containerClassName="lg:max-w-[1100px]"
          textClassName="font-chillax font-light text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[48px] leading-[34px] sm:leading-[40px] lg:leading-[44px] xl:leading-[69px] tracking-[-0.06em] lg:tracking-[-0.08em] text-[#FAFAFA]"
        >
          <span className="text-[#FAFAFA]">We Specialize In Transforming </span>
          Digital Products Into Engaging User Experiences That Drive Results &
          Foster Long‑Term Success. Our Services Range From UI/UX Consultation
          To The Design And Development Of High‑Performing Digital Solutions.
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mt-10 sm:mt-12 lg:mt-[75px] w-full gap-8 lg:gap-0">
          <div className="w-full lg:w-auto">
            <img
              src="/assets/images/service-redpanda.png"
              alt="Service Redpanda"
              className="w-full lg:w-auto xl:w-[568.17px] xl:h-[241px] object-contain"
            />
          </div>
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={5}
            containerClassName="lg:max-w-[460px] xl:w-[30.67rem]"
            textClassName="font-chillax text-[#FAFAFA] text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[1.41rem] leading-[20px] sm:leading-[22px] lg:leading-[24px] xl:leading-[2.375rem] xl:tracking-[-0.09em] xl:font-normal font-light"
          >
            UI/UX Design Isn't Just About Looking Good. It’s All About Making
            Things Easy To Use, Cutting Down On Mistakes, And Streamlining How
            Stuff Works. We Focus On Boosting User Experience And Simplifying
            Processes To Create Solutions That Really Make A Difference.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServiceContent;