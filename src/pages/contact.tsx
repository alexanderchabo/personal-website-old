import * as React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

import * as styles from './contact.module.scss';

const Contact = () => (
  <Layout
    heroBannerBody={
      <div className={styles.heroBannerBody}>
        <h1>Say hi!</h1>
      </div>
    }
    heroBannerType='image'
    heroBannerSrcUrl='https://www.solidbackgrounds.com/images/1400x1050/1400x1050-pastel-yellow-solid-color-background.jpg'
  >
    <SEO title='Contact' />
    <p style={{ maxWidth: '500px', margin: '2rem auto', textAlign: 'center' }}>
      Get in touch with me by clicking{' '}
      <a href='mailto:alexander.chabo@gmail.com'>here</a>
    </p>
    <p style={{ marginTop: '10rem' }} />
  </Layout>
);

export default Contact;
