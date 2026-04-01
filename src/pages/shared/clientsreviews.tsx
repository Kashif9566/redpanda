import BlobCursor from "@/components/videos/blobcursor";
import Ratingscard from "../../components/reviews/ratingscard";
import Recommendationcard from "../../components/reviews/recommendationcard";
import Sectionheading from "../../components/shared/Sectionheading";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/ui/carousel";
import { useCallback, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "@/icons";
import { useMoveCarousel } from "@/hooks/useMoveCarousel";
import { useSiteTheme } from "../../hooks/useSiteTheme";
import { THEME_STYLES } from "../../constants/themeStyles";
import { cn } from "../../utils/cn";

const Clientsreviews = () => {
    const theme = useSiteTheme();
    const bgClass = THEME_STYLES.ClientsReviews[theme];
    const [showBlobCursor, setShowBlobCursor] = useState(false);

    const {
        setApi,
        canScroll,
        handleMouseMove,
        effectiveDirection,
        handleCursorClick
    } = useMoveCarousel();

    const handleMouseEnter = useCallback(() => {
        setShowBlobCursor(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setShowBlobCursor(false);
    }, []);

    const CursorArrowIcon = effectiveDirection === 'next' ? RightArrowIcon : LeftArrowIcon;
    const cursorText = effectiveDirection === 'next' ? "NEXT REVIEWS" : "PREV REVIEWS";

    const { containerRef: reiviewsheadingRef } = useScrollFadeIn({
        selector: ".reviews-heading",
        direction: "top",
    });

    const { containerRef: reviewscardsRef } = useScrollFadeIn({
        selector: ".reviews-cards",
        direction: "right",
        duration: 0.5,
        distance: 200,
    });

    return (
        <section className={cn("pt-12 sm:pt-16 md:pt-20 lg:pt-[100px] pl-4 sm:pl-6 md:pl-8 lg:pl-[48px] sm:min-h-screen overflow-x-hidden flex flex-col cursor-none pb-12 sm:pb-16 md:pb-20 lg:pb-[100px]", bgClass)}>
            <div className="shrink-0" ref={reiviewsheadingRef}>
                <Sectionheading
                    className="reviews-heading xl:font-normal"
                    heading={
                        <>
                            What Our <br />
                            <span className="font-medium text-red-primary-400 md:inline-block block">
                                Clients Say About <br className="md:hidden inline-block" /> Us!
                            </span>
                        </>
                    }
                />
            </div>

            <div
                className="relative flex-1"
                ref={reviewscardsRef}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                {showBlobCursor && canScroll && (
                    <div className="absolute inset-0 hidden sm:block">
                        <BlobCursor onClick={handleCursorClick} rotatingText={cursorText} Arrow={CursorArrowIcon} showarrows zIndex={50} />
                    </div>
                )}

                <div className="reviews-cards h-full ">
                    <Carousel
                        className="h-full"
                        setApi={setApi}
                        opts={{
                            align: "start",
                        }}
                    >
                        <CarouselContent className="h-full w-full gap-2 md:gap-6 xl:gap-[0.5rem]">
                            <CarouselItem className="h-full  flex">
                                <div className="min-w-0 h-full">
                                    <Ratingscard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full  flex">
                                <div className="h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full  flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full  flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full  flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                            <CarouselItem className="h-full  flex">
                                <div className="w-full h-full">
                                    <Recommendationcard />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Clientsreviews;
