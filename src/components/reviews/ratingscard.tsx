import { cn } from "../../utils/cn";
import { Staricon } from "../../icons";
import type { RatingsCardProps } from "../../types/ratingscardprops";
import Goggleratings from "./goggleratings";
import { useSiteTheme } from "../../hooks/useSiteTheme";
import { THEME_STYLES } from "../../constants/themeStyles";

const Ratingscard = ({ showgoggleratings = true, isClientReview = true, className }: RatingsCardProps) => {
  const theme = useSiteTheme();
  // @ts-ignore - cardStyles might have dimensions depending on theme
  const cardStyles = THEME_STYLES.RatingsCard[theme];

  return (
    <div className={cn(
      "rounded-[20px] sm:rounded-[25px] cursor-pointer relative flex flex-col justify-around h-full w-full max-w-[220px] sm:max-w-none py-6 px-6 sm:py-8 sm:px-8 md:py-10 md:px-10 lg:py-[48px] lg:px-[2.5rem] gap-3 backdrop-blur-[92.60401153564453px]",
      cardStyles.container,
      !(className?.includes('w-') || className?.includes('h-')) && cardStyles.dimensions,
      className
    )}>
      <div>
        <h1 className={cn(
          "font-chillax text-[44px] sm:text-[56px] md:text-[72px] lg:text-[86px] font-medium mb-0! leading-none",
          cardStyles.rating
        )}>4.9</h1>
        <div className="flex gap-x-0.5 -mt-1">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="cursor-pointer">
                <Staricon className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px]" />
              </div>
            ))}
        </div>
        <p className={cn(
          "font-chillax text-[20px] sm:text-[24px] md:text-[30px] lg:text-[38px] font-medium my-2 tracking-tighter mt-4 sm:mt-6 lg:mt-[30px]",
          cardStyles.label
        )}>Overall Rating</p>
        <p className={cn(
          "font-chillax font-normal max-w-[80%] text-[12px] sm:text-[14px] md:text-[16px] tracking-tighter",
          isClientReview && "lg:text-[20px]",
          cardStyles.desc
        )}>
          Many CEO’s Prefer Red Panda Networks
        </p>
      </div>

      <div>
        {showgoggleratings && <Goggleratings />}
      </div>
    </div>
  );
};

export default Ratingscard;
