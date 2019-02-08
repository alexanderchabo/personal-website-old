import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Experiences from '../components/Experiences/Experiences';
import Resume from '../data/resume';

const Work = ({ data }) => (
  <Layout>
    <SEO title='Work' />
    {console.log(data)}
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

export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "work" } } }
    ) {
      edges {
        node {
          frontmatter {
            company
          }
        }
      }
    }
  }
`;

export default Work;
