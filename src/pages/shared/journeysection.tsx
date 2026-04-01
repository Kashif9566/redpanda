import Sectionheading from "../../components/shared/Sectionheading";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Journeyrightsection from "@/components/journeys/journeyrightsection";
import QuoteCard from "@/components/getquotes/quotecard";
import { QUOTES } from "@/constants/quotes";
import GetQuoteBgImages from "@/pages/GetAQuote/getquotebgimages";
import { useSiteTheme } from "../../hooks/useSiteTheme";
import { THEME_STYLES } from "../../constants/themeStyles";
import { cn } from "../../utils/cn";
import Ratingscard from "../../components/reviews/ratingscard";
import { ArrowIcon } from "../../icons";

const Journeysection = () => {
  const theme = useSiteTheme();
  const styles = THEME_STYLES.JourneySection[theme];

  const { containerRef: journeyLeftSectionRef } = useScrollFadeIn({
    selector: ".journey-left-section",
    direction: "left",
  });
  const { containerRef: journeyRightSectionRef } = useScrollFadeIn({
    selector: ".journey-right-section",
    direction: "right",
  });


  return (
    <section className={cn("relative isolate w-full px-[48px] overflow-hidden py-12 md:py-16 min-h-screen", styles.section)}>
      <GetQuoteBgImages />
      <div className={styles.overlay} />

      <div className="relative z-2 w-full flex gap-20 flex-col md:flex-row mt-10">
        <div className="shrink-0" ref={journeyLeftSectionRef}>
          <div className="journey-left-section">
            <Sectionheading
              heading={
                <>
                  Start your <span className="md:inline-block hidden"> </span>
                  <span className="font-medium text-red-primary-400">Journey</span>
                </>
              }
              className={styles.heading}
            />

            {theme === "landing" ? (
              <div className="flex flex-col gap-5">
                {QUOTES.map(({ country, description }, index) => (
                  <QuoteCard
                    key={`country-${index}`}
                    description={description}
                    country={country}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <Ratingscard 
                  showgoggleratings={false} 
                  isClientReview={false} 
                  className={styles.ratingsCardContainer} 
                />
                
                <button className={cn("bg-red-primary-400 text-white flex items-center justify-center rounded-xl group transition-all duration-100 hover:bg-[#d11d22]", styles.button)}>
                  <span className="font-chillax font-medium text-[1.25rem]">Schedule a Call</span>
                  <ArrowIcon className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div ref={journeyRightSectionRef} className="journey-right-section w-full mt-15">
          <Journeyrightsection darkmode={styles.rightSectionDarkMode} />
        </div>
      </div>
    </section>
  );
};

export default Journeysection;