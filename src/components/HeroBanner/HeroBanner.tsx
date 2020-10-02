import * as React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import * as styles from "./HeroBanner.module.scss";
import classnames from "classnames";

interface HeroBannerProps {
  title: string;
  subTitle?: string;
  cta?: string;
  ctaLink?: string;
  isFullHeight?: boolean;
  img?: any;
}

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(4),
  },
  input: {
    display: "none",
  },
}));

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subTitle,
  cta = "",
  ctaLink = "",
  isFullHeight = false,
  img,
}) => {
  const classes = useStyles({});

  const maxSize = isFullHeight ? "100%" : "12rem";

  const body = (
    <div className={styles.heroBannerBody}>
      {img && (
        <img
          style={{ margin: "1rem", maxWidth: maxSize, maxHeight: maxSize }}
          src={img}
        />
      )}
      <h1>{title}</h1>
      {subTitle && <p>{subTitle}</p>}
      {cta && ctaLink && (
        <Button
          style={{
            backgroundColor: "var(--cardBg",
          }}
          href={ctaLink}
          variant="contained"
          className={classes.button}
        >
          {cta}
        </Button>
      )}
    </div>
  );

  return (
    <div
      className={classnames(styles.heroBanner, {
        [styles.fullHeight]: isFullHeight,
      })}
    >
      <div className={styles.container}>{body}</div>
    </div>
  );
};

export default HeroBanner;
