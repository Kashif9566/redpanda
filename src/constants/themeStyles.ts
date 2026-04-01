import type { SiteTheme } from "../hooks/useSiteTheme";

/**
 * THEME_STYLES - Single source of truth for component variations based on the current page.
 */
export const THEME_STYLES = {
  Sectionheading: {
    landing: "xl:text-[4rem] xl:leading-[66px] xl:tracking-[-4px]",
    secondary: "xl:text-[6rem] xl:leading-[108px] xl:tracking-[-4px]",
  },
  RatingsCard: {
    landing: {
      container: "bg-[#EA2227] xl:rounded-[1.58rem]",
      dimensions: "xl:w-[24.375rem] xl:h-[36.5rem]",
      rating: "xl:text-[86.72px] xl:leading-[97.56px] xl:tracking-[-3.61px] text-[#FFFFFF]",
      label: "xl:text-[34.73px] xl:leading-[52.78px] xl:tracking-[-1.85px] text-[#FFFFFF]",
      desc: "xl:text-[14.45px] xl:leading-[28px] xl:tracking-[-0.9px] text-[#FFFFFF]",
    },
    secondary: {
      container: "bg-gradient-to-b from-white/10 via-[#FFE6E6]/50 to-[#FFE6E6]/90 xl:gap-[50.23px] xl:rounded-[28.7px]",
      dimensions: "xl:w-[432px] xl:h-[535px]",
      rating: "xl:text-[96px] xl:leading-[108px] text-black",
      label: "xl:text-[38.44px] xl:leading-[58.43px] xl:tracking-[-2.05px] text-black",
      desc: "xl:text-[16px] xl:leading-[31px] xl:tracking-[-1px] xl:font-normal break-all text-black",
    },
  },
  GoogleRatings: {
    landing: {
      container: "xl:w-[342.35px] xl:h-[101.24px] xl:rounded-[15.81px] xl:border-t-[2.06px] xl:relative xl:left-[-15px] ",
      icon: "xl:w-[64px] xl:h-[64px]",
      title: "xl:text-[16.45px] xl:leading-[16.45px] xl:font-bold",
      subtitle: "xl:text-[12.33px]",
    },
    secondary: {
      container: "xl:w-[379px] xl:h-[112.08px] xl:rounded-[17.5px] xl:border-t-[2.06px]",
      icon: "xl:w-[71.2px] xl:h-[71.2px]",
      title: "xl:text-[18.21px] xl:leading-[18.21px] xl:font-bold",
      subtitle: "xl:text-[13.65px]",
    }
  },
  RecommendationCard: {
    landing: {
      container: "bg-white xl:w-[30.8125rem] xl:h-[36.5rem] xl:min-w-[17.36rem] xl:rounded-[1.62rem] xl:pt-[2.08375rem] xl:px-[1.38875rem]",
      title: "xl:text-[24px] xl:leading-[30px] xl:tracking-[-0.05em]",
      description: "xl:text-[22px] xl:leading-[140%] xl:tracking-[-0.04em]",
      name: "xl:text-[21.68px] xl:leading-[140%]",
      position: "xl:text-[14.82px] xl:leading-[140%]",
    },
    secondary: {
      container: "bg-gradient-to-tr from-white/20 via-[#FFE6E6]/5 to-[#FFE6E6]/50 xl:w-[546px] xl:h-[536px] xl:rounded-[28px]",
      title: "xl:text-[38.44px] xl:leading-[58.43px] xl:tracking-[-2.05px]",
      description: "xl:text-[28px]",
      name: "xl:text-[24px]",
      position: "xl:text-[16.4px]",
    }
  },
  JourneySection: {
    landing: {
      section: "bg-black gap-20",
      overlay: "absolute inset-0 bg-linear-to-b from-bg-black-100 to-[rgba(0,0,0,0.35)] z-1",
      heading: "text-white mb-8! xl:text-[4rem] xl:tracking-[-4px]",
      rightSectionDarkMode: true,
      ratingsCardContainer: "",
      button: "",
    },
    secondary: {
      section: "bg-[#F2F2F2] gap-30",
      overlay: "hidden",
      heading: "text-black mb-8! xl:text-[4rem] xl:tracking-[-4px] xl:w-[435px] xl:h-[216px]",
      rightSectionDarkMode: false,
      ratingsCardContainer: "lg:w-[531px] lg:h-[404px] w-full",
      button: "lg:w-[214px] lg:h-[71px] w-full gap-[7px] tracking-[-2px]",
    }
  },
  ClientsReviews: {
    landing: "bg-[#EDEDED]",
    secondary: "bg-[#F2F2F2]",
  },
  GetQuoteBgImages: {
    landing: "absolute object-cover top-0 right-0 z-[-1]",
    secondary: "absolute object-cover top-0 right-0 z-[-1] hidden",
  },
  Colors: {
    starburst: {
      landing: "#FAFAFA",
      secondary: "#E8F3EC",
    },
    blueStarburst: {
        landing: "#006AB5",
        secondary: "#0C5DFF",
    }
  },
} as const;

/**
 * getThemeValue - Helper to get a style or value for the component's current theme.
 */
export function getThemeValue<T extends keyof typeof THEME_STYLES>(
  component: T,
  theme: SiteTheme
): typeof THEME_STYLES[T][keyof typeof THEME_STYLES[T]] {
  return THEME_STYLES[component][theme as keyof typeof THEME_STYLES[T]];
}
