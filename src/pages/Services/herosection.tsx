import { BrandingIcon, UIUXDesignIcon } from "../../icons";
import Button from "../../ui/button";
import Inlineicon from "../../components/services/inlineicon";
import Backgroundredglow from "../../components/services/backgroundredglow";
import TopAnimator from "../../components/animations/topanimator";
import { cn } from "../../utils/cn";
import { useState, useEffect, lazy, Suspense } from "react";
import BottomAnimator from "@/components/animations/bottomanimator";

// Lazy load Spline component to reduce initial bundle size
const Spline = lazy(() => import("@splinetool/react-spline"));

const InteractiveHeading = ({
    children,
    className,
}: {
    children: (isHovered: boolean) => React.ReactNode;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <h1
            className={className}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children(isHovered)}
        </h1>
    );
};

const Introtext = () => {
    const baseclasses =
        "text-5xl md:text-[5vw] xl:text-[75.5px] xl:leading-[84.94px] xl:tracking-[-4.29px] text-white uppercase font-chillax leading-[1.15] tracking-tighter";

    return (
        <>
            <div className="md:block hidden xl:h-[255px]">
                <InteractiveHeading className={cn(baseclasses, "font-[400]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-2">
                            Branding
                            <Inlineicon Icon={BrandingIcon} isHovered={isHovered} className="xl:w-[78px] xl:h-[78px]" />
                            UI/UX
                        </span>
                    )}
                </InteractiveHeading>
                <InteractiveHeading className={cn(baseclasses, "font-[400]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-3">
                            Design
                            <Inlineicon Icon={UIUXDesignIcon} isHovered={isHovered} className="xl:w-[78px] xl:h-[78px]" />
                            To Scale Your
                        </span>
                    )}
                </InteractiveHeading>
                <h1 className={cn(baseclasses, "font-[400]")}>
                    Digital Experiences.
                </h1>
            </div>

            {/* Mobile View */}
            <div className="md:hidden block">
                <InteractiveHeading className={cn(baseclasses, "font-[200]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-2">
                            Branding
                            <Inlineicon Icon={BrandingIcon} isHovered={isHovered} />
                        </span>
                    )}
                </InteractiveHeading>
                <InteractiveHeading className={cn(baseclasses, "font-[200]")}>
                    {(isHovered) => (
                        <span className="inline-flex items-center gap-2">
                            UI/UX Design
                            <Inlineicon Icon={UIUXDesignIcon} isHovered={isHovered} />
                        </span>
                    )}
                </InteractiveHeading>
                <h1 className={cn(baseclasses, "font-[200]")}>
                    To Scale Your
                </h1>
                <h1 className={cn(baseclasses, "font-[200]")}>
                    Digital Experiences.
                </h1>
            </div>
        </>
    );
};

const Herosection = () => {
    const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

    // Load Spline after component mounts to improve initial page load
    useEffect(() => {
        // Small delay to ensure other critical content loads first
        const timer = setTimeout(() => {
            setShouldLoadSpline(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative w-full h-screen bg-bg-black-100 px-4 pt-26 overflow-hidden isolate">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 translate-y-80 overflow-visible">
                {shouldLoadSpline && (
                    <BottomAnimator className="md:scale-[1] scale-[0.5] xl:h-[519px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Suspense fallback={<div className="w-full h-full" />}>
                            <Spline
                                scene="https://prod.spline.design/hAgUkY3HybzhUBy9/scene.splinecode"
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Suspense>
                    </BottomAnimator>
                )}
            </div>
            <Backgroundredglow className="-top-15 -right-40 " />
            <Backgroundredglow className="-bottom-15 -left-40" />
            <TopAnimator>
                <div className="relative z-10 pt-[3.719rem] pl-[1.563rem]">
                    <Introtext />
                    <Button variant="filled" text="Talk To a Designer" className="my-5 ml-1 xl:gap-[4.8px] xl:px-[13.72px] xl:font-semibold xl:text-[15.09px] xl:leading-[16.46px] xl:tracking-[-1.37px]" btnclassname="xl:w-[168.76px] xl:h-[48.71px] xl:rounded-[9.6px]" />
                </div>
            </TopAnimator>
            <div className="absolute bottom-0 hidden md:flex right-0 left-0 px-5 pb-8 justify-between">
                <BottomAnimator className="flex flex-col justify-end">
                    <p className="text-white font-chillax font-[400] uppercase text-[12px] md:text-[0.87vw] xl:text-[12px] xl:leading-[14px] tracking-[0px] self-end leading-[1vw]">
                        Dedicated Design & Strategy Support To <br /> Empower Every Digital
                        Product.
                    </p>
                </BottomAnimator>
                <BottomAnimator>
                    <p className="text-white font-chillax font-[400] uppercase text-[12px] md:text-[0.87vw] xl:text-[12px] xl:leading-[14px] tracking-[0px] self-end leading-[1vw]">
                        we specialize exclusively in creating <br /> exceptional user
                        interfaces and experiences. <br /> We cover the full spectrum of
                        UI/UX design to <br /> ensure your product is not just beautiful,
                        but <br />
                        also functional, accessible, and drives <br /> results.
                    </p>
                </BottomAnimator>
            </div>
        </section>
    );
};

export default Herosection;
