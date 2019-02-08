import * as React from 'react';
import classnames from 'classnames';

import * as styles from './HeroBanner.module.scss';

interface HeroBannerProps {
  srcUrl: string;
  type: 'video' | 'image';
  body: JSX.Element;
}

const HeroBanner: React.SFC<HeroBannerProps> = ({
  body,
  type = 'video',
  srcUrl = 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
}) => (
  <div
    className={classnames(styles.heroBanner, {
      [styles.isVideo]: type === 'video'
    })}
  >
    <div className={styles.overlay} />
    <div className={styles.container}>{body}</div>
    {type === 'video' ? (
      <video playsInline autoPlay muted loop>
        <source src={srcUrl} type='video/mp4' />
      </video>
    ) : (
      <img src={srcUrl} />
    )}
  </div>
);

export default HeroBanner;
