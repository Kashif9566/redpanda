import * as RadixAccordion from "@radix-ui/react-accordion";
import { Accordiantriggericon } from "../icons";
import { cn } from "../utils/cn.ts";

function Accordian({
  className,
  ...props
}: React.ComponentProps<typeof RadixAccordion.Root>) {
  return (
    <RadixAccordion.Root
      className={cn("AccordionRoot", className)}
      {...props}
    />
  );
}

function AccordianItem({
  className,
  ...props
}: React.ComponentProps<typeof RadixAccordion.Item>) {
  return (
    <RadixAccordion.Item
      className={cn("AccordionItem mb-4", className)}
      {...props}
    />
  );
}
function AccordianTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadixAccordion.Trigger>) {
  return (
    <RadixAccordion.Header className="AccordionHeader">
      <RadixAccordion.Trigger
        className={cn(
          "w-full text-left px-5 md:px-10 p-2 rounded-lg border-[1px] border-[#00000040] flex justify-between items-center shadow-sm font-chillax group xl:h-[4.625rem] xl:rounded-[16px] xl:py-[1.125rem] xl:px-[2.625rem] xl:text-[1.5rem]",
          className
        )}
        {...props}
      >
        {children}
        <Accordiantriggericon
          className="group-data-[state=open]:rotate-180 transition-transform duration-500 xl:w-[27px] xl:h-[10px]"
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
}
function AccordianContent({
  className,
  ...props
}: React.ComponentProps<typeof RadixAccordion.Content>) {
  return (
    <RadixAccordion.Content
      className={cn(
        "AccordionContent rounded-b-lg font-chillax overflow-hidden text-xs text-light-gray shadow-none",
        className
      )}
      {...props}
    />
  );
}

export { Accordian, AccordianItem, AccordianTrigger, AccordianContent };
