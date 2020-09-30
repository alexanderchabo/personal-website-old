import * as React from "react";
import Headroom from "react-headroom";

// Components
import PageContainer from "components/PageContainer/PageContainer";
import Link from "components/Link/Link";

// Styles
import * as styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <Headroom disableInlineStyles={true}>
        <PageContainer>
          <div className={styles.header}>
            <h2 className={styles.h2}>
              <Link to="/">{"AC"}</Link>
            </h2>
          </div>
        </PageContainer>
      </Headroom>
    </header>
  );
};

export default Header;
