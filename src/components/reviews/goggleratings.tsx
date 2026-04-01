import { cn } from "../../utils/cn";
import { Goggleicon } from "../../icons"
import { useSiteTheme } from "../../hooks/useSiteTheme";
import { THEME_STYLES } from "../../constants/themeStyles";

const Goggleratings = () => {
  const theme = useSiteTheme();
  const styles = THEME_STYLES.GoogleRatings[theme];

  return (
    <div className={cn(
      'bg-white rounded-xl flex gap-2 items-center cursor-pointer border-t-4 border-t-[#3DA755] w-full max-w-[180px] sm:max-w-[280px] md:max-w-[360px] px-3 py-2 sm:py-3 min-w-0 my-0 mx-auto',
      styles.container
    )}>
      <div>
        <Goggleicon className={cn(
          "w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] md:w-[64px] md:h-[64px]",
          styles.icon
        )} />
      </div>
      <div>
         <p className={cn(
           "text-[14px] sm:text-[16px] md:text-[18px] text-[#1C1C1C99]",
           styles.title
         )}>Google Rating</p>
         <p className={cn(
           "text-[12px] sm:text-[13px] md:text-[14px] text-[#1C1C1C99]", 
           styles.subtitle
         )}>See all our reviews</p>
      </div>
    </div>
  )
}

export default Goggleratings