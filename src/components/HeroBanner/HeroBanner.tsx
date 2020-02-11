import * as React from "react";
import { Fade } from "react-reveal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import * as styles from "./HeroBanner.module.scss";
import classnames from "classnames";

interface HeroBannerProps {
  title: string;
  subTitle?: string;
  disableFadeIn?: boolean;
  cta?: string;
  ctaLink?: string;
  isFullHeight?: boolean;
}

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(4)
  },
  input: {
    display: "none"
  }
}));

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subTitle,
  cta = "",
  ctaLink = "",
  disableFadeIn = false,
  isFullHeight = false
}) => {
  const classes = useStyles({});

  const body = (
    <div className={styles.heroBannerBody}>
      <h1>{title}</h1>
      {subTitle && <p>{subTitle}</p>}
      {cta && ctaLink && (
        <Button
          style={{
            backgroundColor: "var(--bg"
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
        [styles.fullHeight]: isFullHeight
      })}
    >
      <div className={styles.container}>
        {disableFadeIn ? body : <Fade top={true}>{body}</Fade>}
      </div>
    </div>
  );
};

export default HeroBanner;
