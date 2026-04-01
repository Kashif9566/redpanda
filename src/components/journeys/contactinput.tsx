import { cn } from "@/utils/cn";
import React from "react";

const Contactinput = ({ darkmode, ...props }: React.ComponentProps<"input"> & { darkmode?: boolean }) => {
  return (
    <input
      className={cn("w-full font-chillax text-[16px] md:text-[1.17vw] p-3 px-4 rounded-full border mr-4 mb-4 xl:h-[3.015rem] xl:pt-[8.62px] xl:pb-[8.62px] xl:pr-[8.62px] xl:pl-[24.13px] xl:border-[0.86px]",
        darkmode ? "border-white text-white" : "border-black",
      )}
      {...props}
    />
  );
};

export default Contactinput;
