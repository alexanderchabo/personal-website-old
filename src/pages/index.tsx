import * as React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import PageContainer from '../components/PageContainer/PageContainer';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import { Fade } from 'react-reveal';

import * as styles from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`alexander`, `chabo`, `react`]} />
    <HeroBanner
      body={
        <div className={styles.heroBannerBody}>
          <h1>Hi, I'm Alexander Chabo.</h1>
          <p>a Software Engineer.</p>
        </div>
      }
    />
    <PageContainer>
      <Fade bottom delay={500}>
        <p
          style={{
            maxWidth: '500px',
            margin: '1rem auto',
            textAlign: 'center'
          }}
        >
          Born and raised in 🇸🇪, moved in april 2018 to 🇨🇦 and doing what I love
          most: <b>Product Development!</b>
        </p>
      </Fade>
    </PageContainer>
  </Layout>
);

export default IndexPage;
