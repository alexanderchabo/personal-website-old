import * as React from 'react';
import { Fade } from 'react-reveal';

import * as styles from './HeroBanner.module.scss';

interface HeroBannerProps {
  title: string;
  subTitle?: string;
  disableFadeIn?: boolean;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subTitle,
  disableFadeIn = false
}) => {
  const body = (
    <div className={styles.heroBannerBody}>
      <h1>{title}</h1>
      {subTitle && <p>{subTitle}</p>}
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
