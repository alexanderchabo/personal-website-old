import * as React from 'react';
import { Fade } from 'react-reveal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import * as styles from './HeroBanner.module.scss';

interface HeroBannerProps {
  title: string;
  subTitle?: string;
  disableFadeIn?: boolean;
  cta?: string;
  ctaLink?: string;
}

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(4),
  },
  input: {
    display: 'none',
  },
}));

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subTitle,
  cta = "",
  ctaLink = "",
  disableFadeIn = false
}) => {
  const classes = useStyles({});

  const body = (
    <div className={styles.heroBannerBody}>
      <h1>{title}</h1>
      {subTitle && <p>{subTitle}</p>}
      {cta && ctaLink && <Button style={{
        backgroundColor: "var(--bg",
    }} href={ctaLink} variant="contained" className={classes.button}>{cta}</Button>}
    </div>
  );

  return (
    <div className={styles.heroBanner}>
      <div className={styles.container}>
        {disableFadeIn ? body : <Fade top>{body}</Fade>}
      </div>
    </div>
  );
};

export default HeroBanner;
