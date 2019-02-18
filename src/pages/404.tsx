import * as React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import PageContainer from '../components/PageContainer/PageContainer';

import * as styles from './404.module.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <HeroBanner
      body={
        <div className={styles.heroBannerBody}>
          <h1>404!</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      }
    />
  </Layout>
);

export default NotFoundPage;
