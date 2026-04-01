import React from 'react';
import { cn } from '../../utils/cn';
import { useSiteTheme } from '../../hooks/useSiteTheme';
import { THEME_STYLES } from '../../constants/themeStyles';

const Sectionheading = ({ heading, className }: { heading: React.ReactNode, className?: React.ComponentProps<"h1">["className"] }) => {
    const theme = useSiteTheme();
    const themeClass = THEME_STYLES.Sectionheading[theme];

    return (
        <h1 className={cn("font-chillax mb-10 2xl:mb-20 leading-10 tracking-[-2px] md:leading-[4.6vw] text-[32px] md:text-[4vw]", themeClass, className)}>
            {heading}
        </h1>
    )
}

export default Sectionheading