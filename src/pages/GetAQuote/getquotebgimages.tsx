import topbgimage from "../../../public/assets/images/getquote/getquotetopbg.png"
import bottombgimage from "../../../public/assets/images/getquote/getquotebottombg.png"
import { useSiteTheme } from "../../hooks/useSiteTheme";
import { THEME_STYLES } from "../../constants/themeStyles";

const GetQuoteBgImages = () => {
  const theme = useSiteTheme();
  const styles = THEME_STYLES.GetQuoteBgImages[theme];

  return (
    <div className="pointer-events-none">
      <img
        src={topbgimage}
        alt=""
        className={styles}
      />

      {/* <img 
        src={bottombgimage} 
        alt="" 
        className="absolute bottom-0 left-0 object-cover z-[-1]"
      /> */}
    </div>
  )
}

export default GetQuoteBgImages