import * as React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Link from '../components/Link/Link';
import Experiences from '../components/Experiences/Experiences';
import Resume from '../data/resume';

const Work = () => (
  <Layout>
    <SEO title='Work' />
    <Experiences
      heading='Work'
      experiences={Resume.works.map(work => ({
        title: work.position,
        subTitle: work.company,
        ...work
      }))}
    />
  </Layout>
);

export default Work;
