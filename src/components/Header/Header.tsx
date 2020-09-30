import * as React from "react";
import Headroom from "react-headroom";

// Components
import PageContainer from "components/PageContainer/PageContainer";
import Link from "components/Link/Link";
import Toggle from "src/components/Toggle/Toggle";

// Icons
import sun from "assets/images/sun.png";
import moon from "assets/images/moon.png";

// Styles
import * as styles from "./Header.module.scss";

// Utils
import { useDarkMode } from "src/utils/useDarkMode";

const Header: React.FC = () => {
  const [theme, setTheme] = useDarkMode();

  const handleOnChange = (event) =>
    setTheme(event.target.checked ? "dark" : "light");

  return (
    <header>
      <Headroom disableInlineStyles={true}>
        <PageContainer>
          <div className={styles.header}>
            <h2 className={styles.h2}>
              <Link to="/">{"AC"}</Link>
            </h2>
            {theme ? (
              <Toggle
                icons={{
                  checked: (
                    <img
                      src={moon}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: "none" }}
                    />
                  ),
                  unchecked: (
                    <img
                      src={sun}
                      width="16"
                      height="16"
                      role="presentation"
                      style={{ pointerEvents: "none" }}
                    />
                  ),
                }}
                checked={theme === "dark"}
                onChange={handleOnChange}
              />
            ) : (
              <div style={{ height: "24px" }} />
            )}
          </div>
        </PageContainer>
      </Headroom>
    </header>
  );
};

export default Header;
