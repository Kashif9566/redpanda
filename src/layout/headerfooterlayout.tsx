import React from "react";
import logo from "../../public/assets/images/logo2.png"
import { DropdownMenuIcon, MenuIcon } from "../icons";
import Button from "../ui/button";
import { Dropdown } from "../ui/dropdown";
import { useLocation, useNavigate } from "react-router";
import redpandalogo from "/assets/images/footerlogo.png";
import { InfiniteSlider } from "../components/animations/infiniteslider";
import { MENU_ITEMS } from "../constants/menuitems";
import type { MenuItem } from "../types/menuitem";
import { FOOTER_CASE_STUDIES, FOOTER_MARQUEE_ITEMS, FOOTER_POLICIES, FOOTER_QUICK_LINKS, FOOTER_SOCIAL_LINKS } from "../constants/footerlinks";
import { usePageLabel } from "../hooks/usePageLabel";
import TopAnimator from "../components/animations/topanimator";
import quotepagelogo from "../../public/assets/images/getquote/quotepagelogo.png"


const Footerlinksheading = ({ text }: { text: string }) => (
  <h1 className="font-chillax text-[24px] md:text-[1.75vw] xl:text-[38.44px] xl:line-height-[58.43px] xl:tracking-[-2.05px] mb-3 font-medium tracking-tight text-white">
    {text}
  </h1>
);

const Footerlink = ({ label }: { label: string }) => (
  <p className="text-[14px] md:text-[1.05vw] xl:text-[20px] xl:leading-[31px] text-[#FAFAFA] font-chillax font-light cursor-pointer">
    {label}
  </p>
);

const Header = ({ title }: { title?: string }) => {

  const location = useLocation();

  const navigate = useNavigate();

  const defaultConfigPageLabel = usePageLabel();
  const pageLabel = title || defaultConfigPageLabel;

  const isQuotePage = location.pathname === "/get-quote";

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <TopAnimator 
        className={`px-4 py-4 md:px-[48px] md:py-[50px] flex justify-between items-center fixed w-full z-[99] header transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <>
          <Dropdown>
            <Dropdown.Trigger asChild>
              <div
                className={`flex ${isQuotePage ? "bg-[#242424]" : "bg-white"} items-center justify-between ${pageLabel === "" ? "gap-10" : "gap-8"} rounded-md w-full md:w-[296.36px] md:h-[48.71px] px-3 md:gap-15 shadow-sm`}
              >
                <img
                  src={isQuotePage ? quotepagelogo : logo}
                  alt="Logo"
                  className="cursor-pointer md:w-[107.2px] md:h-[26.96px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/");
                  }}
                  onPointerDown={(e) => e.stopPropagation()}
                />
                <p className={`${(location.pathname === "/blog" || isQuotePage) ? "text-[15px] md:text-[1.09vw]" : "text-[22px] md:text-[1.6vw]"} hidden md:block font-chillax tracking-tight ${isQuotePage ? "text-white" : "text-black"}`}>{pageLabel}</p>
                <MenuIcon color={isQuotePage ? "white" : "#1C1C1C"} className="cursor-pointer w-[29.84px] h-[16.46px]" />
              </div>
            </Dropdown.Trigger>

            <Dropdown.Content className="w-[400px]">
              {MENU_ITEMS.map(({ label, href }: MenuItem, index) => {
                const activepage = href === location.pathname;
                return (
                  <Dropdown.Item
                    key={label}
                    onClick={() => navigate(href ?? "/")}
                    className={index === MENU_ITEMS.length - 1 ? "" : "mb-2"}
                    active={activepage}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <p className="font-chillax">{label}</p>
                    <DropdownMenuIcon height={20} width={20} isHovered={hoveredIndex === index} />
                  </Dropdown.Item>
                );
              })}
              <div className="font-chillax flex justify-between items-center text-[14px] font-[300]">
                <p className="cursor-pointer">Terms & Conditions</p>
                <p className="cursor-pointer">Privacy & Policy</p>
              </div>
            </Dropdown.Content>
          </Dropdown>


          <div className="hidden md:inline-block">
            <Button
              variant="filled"
              text={location.pathname === "/" ? "Book a Consultation" : "Let’s Talk"}
              onClick={() => navigate("/contact")}
              className="md:w-[209.76px] md:h-[48.71px] md:text-[15.09px] px-5"
            />
          </div>
        </>
      </TopAnimator>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-black-100 px-4 md:px-6 lg:px-[48px] py-12 h-210 flex flex-col justify-between relative">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="w-full md:max-w-[30%] mb-8 md:mb-0">
          <img src={redpandalogo} alt="Loading..." className="xl:w-[294.73px] xl:h-[65.30px]" width={300} />
          <p className="text-[#FAFAFA] font-chillax text-[16px] md:text-[1.1vw] xl:w-[456px] xl:h-[124px] xl:text-[20px] xl:leading-[31px] leading-relaxed mt-6 mb-4 font-light">
            We work hand-in-hand with your team, integrating seamlessly into
            your process. Your vision combined with our expertise leads to
            stronger, more impactful outcomes.
          </p>
          <div className="flex gap-6 md:hidden my-6">
            {FOOTER_SOCIAL_LINKS.map(({ label }: MenuItem) => (
              <p className="text-sm text-white font-chillax cursor-pointer transition-colors hover:text-red-primary-400">
                {label}
              </p>
            ))}
          </div>
          <Button variant="filled" text="Company Profile" btnclassname="xl:w-[171.02px] xl:h-[52.79px] xl:gap-[5.2px] xl:px-[14.87px] xl:font-semibold xl:text-[16.36px] xl:tracking-[-1.49px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-8 lg:gap-16 w-full md:w-auto">
          <div>
            <Footerlinksheading text="Quick Links" />
            <div className="flex flex-col gap-3">
              {FOOTER_QUICK_LINKS.map(({ label }: MenuItem) => (
                <Footerlink key={label} label={label} />
              ))}
            </div>
          </div>
          <div>
            <Footerlinksheading text="Policies" />
            <div className="flex flex-col gap-3">
              {FOOTER_POLICIES.map(({ label }: MenuItem) => (
                <Footerlink key={label} label={label} />
              ))}
            </div>
          </div>
          <div>
            <Footerlinksheading text="Case Studies" />
            <div className="flex flex-col gap-3">
              {FOOTER_CASE_STUDIES.map(({ label }: MenuItem) => (
                <Footerlink key={label} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-[16px] md:text-[1.1vw] xl:font-medium xl:text-[24px] xl:tracking-[-1px] font-chillax text-white text-left md:text-right font-normal mt-16 absolute bottom-[22%] right-[6%]">
        Red Panda Networks LLC © 2025
      </p>
      <div className="flex justify-between items-center">
        <div className="md:flex gap-6 hidden">
          {FOOTER_SOCIAL_LINKS.map(({ label }: MenuItem) => (
            <p className="text-[16px] md:text-[1.1vw] xl:font-medium xl:text-[24px] xl:leading-[58.43px] xl:tracking-[-1px] text-white font-chillax cursor-pointer transition-colors hover:text-red-primary-400">
              {label}
            </p>
          ))}
        </div>
        <div className="border-2 rounded-2xl border-red-primary-400 overflow-hidden w-full sm:max-w-[55vw] mt-5 xl:h-[111px] xl:rounded-[28px] xl:border-[3px]">
          <div className="flex gap-5 items-center justify-center ">
            <InfiniteSlider
              items={FOOTER_MARQUEE_ITEMS}
              speed={80}
              direction="left"
              gap={20}
              itemsHeight={0}
              pauseOnHover={false}
              scaleOnHover={false}
              fadeOut={false}
              fadeOutColor="transparent"
              ariaLabel="Footer marquees"
              className="overflow-y-hidden p-4"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const HeaderFooterLayout = ({ children, headerTitle }: { children: React.ReactNode; headerTitle?: string }) => {
  return (
    <div>
      <Header title={headerTitle} />

      {children}

      <Footer />
    </div>
  );
};

export default HeaderFooterLayout;
