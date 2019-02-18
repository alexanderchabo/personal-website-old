import * as React from 'react';
import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import VerticalTimeLine from '../components/VerticalTimeLine/VerticalTimeLine';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import PageContainer from '../components/PageContainer/PageContainer';

import * as styles from './about.module.scss';

interface Date {
  month?: number;
  year?: number;
}

interface Event {
  startDate: Date;
  endDate: Date;
  location: string;
  logo?: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

interface Experience extends Event {
  position: string;
  company: string;
  summary: string;
  highlights: string[];
}

interface Education extends Event {
  studyType: string;
  area: string;
  institution: string;
  website: string;
}

interface AboutProps {
  data: {
    works: {
      edges: [
        {
          node: {
            frontmatter: Experience;
          };
        }
      ];
    };
    educations: {
      edges: [
        {
          node: {
            frontmatter: Education;
          };
        }
      ];
    };
  };
}

const About = ({ data }: AboutProps) => (
  <Layout>
    <SEO title='Work' />

    <section>
      <HeroBanner
        body={
          <div className={styles.heroBannerBody}>
            <h1>My work</h1>
          </div>
        }
      />
      <PageContainer>
        <VerticalTimeLine
          type='work'
          events={data.works.edges.map(({ node: { frontmatter: work } }) => ({
            ...work,
            title: work.position,
            subTitle: work.company,
            logo: work.logo ? work.logo.childImageSharp.fixed : null
          }))}
        />
      </PageContainer>
    </section>

    <section>
      <HeroBanner
        body={
          <div className={styles.heroBannerBody}>
            <h1>My education</h1>
          </div>
        }
      />
      <PageContainer>
        <VerticalTimeLine
          type='education'
          events={data.educations.edges.map(
            ({ node: { frontmatter: education } }) => ({
              ...education,
              title: education.institution,
              subTitle: education.studyType + ' in ' + education.area,
              logo: education.logo ? education.logo.childImageSharp.fixed : null
            })
          )}
        />{' '}
      </PageContainer>
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query PageQuery {
    works: allMarkdownRemark(
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
            startDate {
              month
              year
            }
            endDate {
              month
              year
            }
            logo {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }

    educations: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "education" } } }
      sort: { fields: frontmatter___endDate___year, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            institution
            area
            studyType
            website
            location
            startDate {
              month
              year
            }
            endDate {
              month
              year
            }
            logo {
              childImageSharp {
                fixed(height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default About;
