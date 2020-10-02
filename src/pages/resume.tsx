import * as React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO/SEO";
import HeroBanner from "components/HeroBanner/HeroBanner";
import PageContainer from "src/components/PageContainer/PageContainer";
import VerticalTimeLine from "src/components/VerticalTimeLine/VerticalTimeLine";
import { FixedObject } from "gatsby-image";
import { graphql } from "gatsby";
import { Document } from "@contentful/rich-text-types";

interface Event {
  dateStarted: string;
  dateEnded: string;
  location: string;
  logo: Logo;
  summary: {
    json: Document;
  };
}

interface Logo {
  fixed?: FixedObject;
  file: {
    contentType: string;
    url: string;
  };
}

interface Experience extends Event {
  position: string;
  company: string;
}

interface Education extends Event {
  studyType: string;
  area: string;
  institution: string;
}

interface Props {
  data: {
    works: {
      edges: [
        {
          node: Experience;
        }
      ];
    };
    educations: {
      edges: [
        {
          node: Education;
        }
      ];
    };
  };
}

const Resume: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Resume" />

    <section>
      <HeroBanner title="Work" subTitle="Wearer of many hats" />
      <PageContainer>
        <VerticalTimeLine
          type="work"
          events={data.works.edges.map(({ node }) => ({
            ...node,
            title: node.position,
            subTitle: node.company,
            logo: node.logo,
            summary: node.summary,
          }))}
        />
      </PageContainer>
    </section>

    <section>
      <HeroBanner title="Education" subTitle="The math is strong in this one" />
      <PageContainer>
        <VerticalTimeLine
          type="education"
          events={data.educations.edges.map(({ node }) => ({
            ...node,
            title: node.institution,
            subTitle: node.studyType + " in " + node.area,
            logo: node.logo,
            summary: node.summary,
          }))}
        />
      </PageContainer>
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query PageQuery {
    works: allContentfulWork(sort: { fields: [dateEnded], order: DESC }) {
      edges {
        node {
          position
          company
          location
          dateStarted(formatString: "MM/YYYY")
          dateEnded(formatString: "MM/YYYY")
          link
          logo {
            fixed(width: 200) {
              ...GatsbyContentfulFixed_withWebp
            }
            file {
              contentType
              url
            }
          }
          summary {
            json
          }
        }
      }
    }

    educations: allContentfulEducation(
      sort: { fields: [dateEnded], order: DESC }
    ) {
      edges {
        node {
          studyType
          area
          institution
          location
          dateStarted(formatString: "MM/YYYY")
          dateEnded(formatString: "MM/YYYY")
          link
          logo {
            fixed(width: 80) {
              ...GatsbyContentfulFixed_withWebp
            }
            file {
              contentType
              url
            }
          }
          summary {
            json
          }
        }
      }
    }
  }
`;

export default Resume;
