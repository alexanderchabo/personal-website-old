import * as React from "react";
import { SocialIcon } from "react-social-icons";
import useSiteMetadata from "utils/useSiteMetadata";

// Styles
import * as styles from "./SocialBar.module.scss";

const SocialBar: React.FC = () => {
  const { social } = useSiteMetadata();

  return (
    <div className={styles.wrapper}>
      {Object.values(social).map((key) => (
        <SocialIcon key={key} className={styles.icon} url={key} />
      ))}
    </div>
  );
};

export default SocialBar;
