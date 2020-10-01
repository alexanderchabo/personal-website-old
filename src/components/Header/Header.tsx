import * as React from "react";
import Headroom from "react-headroom";
import Link from "components/Link/Link";
import * as styles from "./Header.module.scss";
import classNames from "classnames";
import { useDeviceType } from "src/utils/useDeviceType";
import useSiteMetadata from "utils/useSiteMetadata";
import { SocialIcon } from "react-social-icons";

const Header: React.FC = () => {
  const { social } = useSiteMetadata();
  const { isDesktop } = useDeviceType();

  return (
    <header className={classNames(isDesktop && styles.fixToLeft)} >
      <Headroom disableInlineStyles={true} disable={isDesktop} >
        <div className={styles.header}>
          <h2 className={styles.h2}>
            <Link to="/">{"AC"}</Link>
          </h2>
        </div>
      </Headroom>
      {isDesktop && (
      <div className={styles.socialBar}>
          {Object.values(social).map(key => (
            <SocialIcon
              key={key}
              className={styles.icon}
              bgColor="gray"
              url={key}
              style={{ height: 40, width: 40 }}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
