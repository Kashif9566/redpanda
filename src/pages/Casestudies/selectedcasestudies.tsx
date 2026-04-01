import { useRef } from "react";
import Singlecasestudy from "../../components/casestudies/singlecasestudy";
import JourneyBadge from "../../components/journeys/journeybadge";
import Sectionheading from "../../components/shared/Sectionheading";
import { CASE_STUDIES } from "../../constants/casestudies";
import { SELECTED_STUDIES_BADGES } from "../../constants/selectedstudiesbadges";
import { useActive } from "../../hooks/useActive";
import { useScrollBlurAnimation } from "../../hooks/useScrollBlurAnimation";

const Selectedcasestudies = () => {

    const { setActive: setActiveCaseStudy, checkIsActive: checkActiveCaseStudy } =
        useActive(null);

    const casestudiesRef = useRef(null);

    useScrollBlurAnimation(".case-study", casestudiesRef);

    return (
        <section className="py-15 px-2 sm:px-4 !bg-background-white">
            <Sectionheading
                className=""
                heading={
                    <>
                        Selected{" "}
                        <span className="font-medium text-red-primary-400 md:inline-block block">
                            Case Studies
                        </span>
                    </>
                }
            />

            <div className="my-8 flex gap-3 pl-1 md:gap-5 flex-wrap">
                {SELECTED_STUDIES_BADGES.map((badge, index) => {
                    return (
                        <JourneyBadge
                            key={badge}
                            text={badge}
                            handleClick={() => setActiveCaseStudy(index)}
                            active={checkActiveCaseStudy(index)}
                            className="xl:w-[76px] xl:h-[49px] xl:pt-[7px] xl:pr-[24px] xl:pb-[7px] xl:pl-[24px]"
                        />
                    );
                })}
            </div>

            <div className="grid grid-cols-1 pl-1 md:grid-cols-2 grid-rows-3 gap-5 justify-items-center mx-auto my-0 xl:w-[93vw]" ref={casestudiesRef}>
                {CASE_STUDIES.map((caseStudy, index) => (
                    <Singlecasestudy 
                        caseStudy={caseStudy} 
                        key={`${caseStudy.image}-${index}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Selectedcasestudies;
