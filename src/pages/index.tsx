import * as React from 'react';
import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import { Fade } from 'react-reveal';

// Components
import Layout from 'components/Layout/Layout';
import SEO from 'components/SEO/SEO';
import VerticalTimeLine from 'components/VerticalTimeLine/VerticalTimeLine';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import PageContainer from 'components/PageContainer/PageContainer';

// Styles
import * as styles from './index.module.scss';

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

interface IndexProps {
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

const Index: React.FC<IndexProps> = ({ data }) => (
  <Layout>
    <SEO title="Work" />

    <section>
      <HeroBanner
        title={`Hi! I'm Alexander`}
        subTitle="An organism that turns caffeine into software"
      />
      <Fade bottom delay={500}>
        <p
          style={{
            padding: '20px',
            textAlign: 'center',
            margin: '0 auto',
            height: '40vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <span>Born and raised in 🇸🇪</span>
          <span>Relocated in april 2018 to 🇨🇦</span>
          <br />
          <span>
            Doing what I love most: <b>Product Development!</b>
          </span>
        </p>
      </Fade>
    </section>

    <section>
      <HeroBanner title="Work" subTitle="Wearer of many hats" />
      <PageContainer>
        <VerticalTimeLine
          type="work"
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
      <HeroBanner title="Education" subTitle="The math is strong in this one" />
      <PageContainer>
        <VerticalTimeLine
          type="education"
          events={data.educations.edges.map(
            ({ node: { frontmatter: education } }) => ({
              ...education,
              title: education.institution,
              subTitle: education.studyType + ' in ' + education.area,
              logo: education.logo ? education.logo.childImageSharp.fixed : null
            })
          )}
        />
      </PageContainer>
    </section>

    <section>
      <HeroBanner
        title="Wanna get in touch?"
        // subTitle="You can contact me below or through one of the social platforms in the footer"
        cta="contact me"
        ctaLink="mailto:alexander.chabo@gmail.com"
      />
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

export default Index;
