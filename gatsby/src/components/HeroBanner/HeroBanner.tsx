import * as React from 'react';

import * as styles from './HeroBanner.module.scss';

interface HeroBannerProps {
  srcUrl?: string;
  body: JSX.Element;
}

const HeroBanner: React.SFC<HeroBannerProps> = ({
  body,
  srcUrl = 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
}) => (
  <div className={styles.heroBanner}>
    <div className={styles.overlay} />
    <div className={styles.container}>{body}</div>
    <video playsInline autoPlay muted loop>
      <source src={srcUrl} type='video/mp4' />
    </video>
  </div>
);

export default HeroBanner;
