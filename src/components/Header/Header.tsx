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
    <header className={classNames(isDesktop && styles.fixToLeft)}>
      <Headroom
        disableInlineStyles={true}
        disable={isDesktop}
        className={styles.headroomWrapper}
      >
        <div className={styles.header}>
          <h2 className={styles.h2}>
            <Link to="/">{"AC"}</Link>
          </h2>
          <div className={styles.links}>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
          </div>
          {isDesktop && (
            <div className={styles.socialBar}>
              {Object.values(social).map((key) => (
                <SocialIcon key={key} className={styles.icon} url={key} />
              ))}
            </div>
          )}
        </div>
      </Headroom>
    </header>
  );
};

export default Header;
