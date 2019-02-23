import * as React from 'react';
import { Fade } from 'react-reveal';

// Components
import Layout from 'components/Layout/Layout';
import SEO from 'components/SEO/SEO';
import PageContainer from 'components/PageContainer/PageContainer';
import HeroBanner from 'components/HeroBanner/HeroBanner';

// Styles
import * as styles from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`alexander`, `chabo`, `react`]} />
    <HeroBanner
      title={`Hi! I'm Alexander`}
      subTitle='An organism that turns caffeine into software'
    />
    <PageContainer>
      <Fade bottom delay={500}>
        <p
          style={{
            maxWidth: '500px',
            textAlign: 'center',
            margin: '0 auto'
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
