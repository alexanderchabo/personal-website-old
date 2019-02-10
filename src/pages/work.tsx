import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Experiences from '../components/Experiences/Experiences';

import * as styles from './work.module.scss';

interface Date {
  month?: number;
  year?: number;
}

interface Experience {
  startDate: Date;
  endDate: Date;
  location: string;
  position: string;
  company: string;
  summary: string;
  highlights: string[];
}

interface WorkProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: Experience;
          };
        }
      ];
    };
  };
}

const Work = ({ data }: WorkProps) => (
  <Layout
    heroBannerBody={
      <div className={styles.heroBannerBody}>
        <h1>What I've done so far</h1>
      </div>
    }
    heroBannerType='image'
    heroBannerSrcUrl='https://www.setaswall.com/wp-content/uploads/2017/04/Nyanza-Solid-Color-Background-Wallpaper-5120x2880-340x220.png'
  >
    <SEO title='Work' />
    <Experiences
      heading='Experiences'
      experiences={data.allMarkdownRemark.edges.map(
        ({ node: { frontmatter: work } }) => ({
          title: work.position,
          subTitle: work.company,
          ...work
        })
      )}
    />
  </Layout>
);

export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "work" } } }
      sort: {
        fields: [frontmatter___endDate___year, frontmatter___endDate___month]
        order: [DESC, DESC]
      }
    ) {
      edges {
        node {
          frontmatter {
            position
            company
            location
            summary
            highlights
            logo
            startDate {
              month
              year
            }
            endDate {
              month
              year
            }
          }
        }
      }
    }
  }
`;

export default Work;
