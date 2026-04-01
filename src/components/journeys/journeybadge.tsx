import { BadgesDiamondIcon } from "../../icons";
import type { JourneyBadgeProps } from "../../types/journeybadge";
import { cn } from "../../utils/cn";

const JourneyBadge = ({
  active,
  text,
  handleClick,
  showlefticon = false,
  showrighticon = false,
  icon = (
    <BadgesDiamondIcon
      strokewidth={active ? 0 : null}
      width={10}
      height={10}
      fill="#FAFAFA"
    />
  ),
  className,
  darkmode,
}: JourneyBadgeProps) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 rounded-full p-2 2xl:px-5 px-3 cursor-pointer min-w-fit border whitespace-nowrap xl:border-[0.86px] xl:py-[0.539rem] xl:px-[0.8425rem] xl:h-[3.015rem]",
        active ? "border-[#EE443F] bg-red-primary-400" : (darkmode ? "border-white" : "border-black"),
        className
      )}
      onClick={handleClick}
    >
      {showlefticon && icon}
      <p
        className={cn(
          `font-chillax text-[400] text-[20px] md:text-[1.46vw] xl:text-[20.68px] xl:leading-[30.16px] xl:tracking-[-0.03em]`,
          active || darkmode ? "text-white" : ""
        )}
      >
        {text}
      </p>
      {showrighticon && icon}
    </div>
  );
};

export default JourneyBadge;
