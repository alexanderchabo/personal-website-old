import * as React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const IndexPage = () => (
  <Layout displayHeroBanner>
    <SEO title='Home' keywords={[`alexander`, `chabo`, `react`]} />

    <p style={{ maxWidth: '500px', margin: '2rem auto', textAlign: 'center' }}>
      Born and raised in 🇸🇪, moved in april 2018 to 🇨🇦 and doing what I love
      most: <b>Product Development!</b>
    </p>
    <p style={{ marginTop: '20rem' }} />
  </Layout>
);

export default IndexPage;
