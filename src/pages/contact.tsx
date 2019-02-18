import * as React from 'react';

// Components
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import PageContainer from '../components/PageContainer/PageContainer';

import * as styles from './contact.module.scss';

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <HeroBanner
      body={
        <div className={styles.heroBannerBody}>
          <h1>Say hi!</h1>
        </div>
      }
    />
    <PageContainer>
      <p
        style={{ maxWidth: '500px', margin: '2rem auto', textAlign: 'center' }}
      >
        Get in touch with me by clicking{' '}
        <a href='mailto:alexander.chabo@gmail.com'>here</a>
      </p>
      <p style={{ marginTop: '10rem' }} />
    </PageContainer>
  </Layout>
);

export default Contact;
