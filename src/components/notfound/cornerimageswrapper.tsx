import React from "react";
import uiuxdesign from "../../../public/assets/images/notfound/uiuxdesign.png";
import saasdesign from "../../../public/assets/images/notfound/saasdesign.png";
import webdesign from "../../../public/assets/images/notfound/webdesign.png";
import productdesign from "../../../public/assets/images/notfound/productdesign.png";


const CornerImagesWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`relative w-full h-full ${className || ""}`}>
            <img src={webdesign} alt="UI UX Design" className="absolute pointer-events-none select-none md:w-[568px] md:h-[568px] md:top-[-25%] md:left-[-23%] md:rotate-[70.64deg] w-[200px] z-[10]" />
            <img src={uiuxdesign} alt="SaaS Design" className="absolute pointer-events-none select-none md:w-[640px] md:h-[640px] md:top-[-32%] md:right-[-10%] md:rotate-[25.64deg] w-[300px] z-[10]" />
            <img src={productdesign} alt="Web Design" className="absolute pointer-events-none select-none md:w-[498px] md:h-[498px] md:bottom-[-20%] md:left-[-10%] md:rotate-[-15deg] w-[200px] z-[10]" />
            <img src={saasdesign} alt="Product Design" className="absolute pointer-events-none select-none md:w-[518px] md:h-[518px] md:bottom-[-15%] md:right-[-10%] w-[200px] z-[10]" />
            {children}
        </div>
    );
};

export default CornerImagesWrapper;
