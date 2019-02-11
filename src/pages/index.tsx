import * as React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import * as styles from './index.module.scss';

const IndexPage = () => (
  <Layout
    heroBannerBody={
      <div className={styles.heroBannerBody}>
        <h1>Hi, I'm Alexander Chabo.</h1>
        <p>a Software Engineer.</p>
      </div>
    }
    heroBannerType='video'
    heroBannerSrcUrl='https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4'
  >
    <SEO title='Home' keywords={[`alexander`, `chabo`, `react`]} />
    <p style={{ maxWidth: '500px', margin: '1rem auto', textAlign: 'center' }}>
      Born and raised in 🇸🇪, moved in april 2018 to 🇨🇦 and doing what I love
      most: <b>Product Development!</b>
    </p>
    <p style={{ marginTop: '2rem' }} />
  </Layout>
);

export default IndexPage;
