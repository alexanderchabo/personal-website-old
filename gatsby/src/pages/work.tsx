import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Experiences from '../components/Experiences/Experiences';
import Resume from '../data/resume';

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
  <Layout>
    <SEO title='Work' />
    <Experiences
      heading='Work'
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
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "work" } } }) {
      edges {
        node {
          frontmatter {
            position
            company
            location
            summary
            highlights
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
