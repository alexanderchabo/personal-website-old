import * as React from "react";
import { graphql } from "gatsby";
import { FixedObject } from "gatsby-image";
import { Fade } from "react-reveal";
import { Document } from "@contentful/rich-text-types";

// Components
import Layout from "components/Layout/Layout";
import SEO from "components/SEO/SEO";
import VerticalTimeLine from "components/VerticalTimeLine/VerticalTimeLine";
import HeroBanner from "components/HeroBanner/HeroBanner";
import PageContainer from "components/PageContainer/PageContainer";

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

interface IndexProps {
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

const Index: React.FC<IndexProps> = ({ data }) => (
  <Layout>
    <SEO title="Work" />

    <section>
      <HeroBanner
        title={`Hi, I'm Alex 🦠`}
        subTitle="An organism that turns caffeine into software"
        disableFadeIn={true}
      />
      <p
        style={{
          padding: "20px",
          textAlign: "center",
          margin: "0 auto",
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <span>Born and raised in Sweden 🇸🇪</span>
        <span>Relocated in april 2018 to Canada 🇨🇦</span>
        <br /> <br />
        <span>Doing what I love most:</span>
        <b>Product development</b>
      </p>
    </section>

    <section>
      <HeroBanner title="Work 👨🏻‍💻" subTitle="Wearer of many hats" />
      <PageContainer>
        <VerticalTimeLine
          type="work"
          events={data.works.edges.map(({ node }) => ({
            ...node,
            title: node.position,
            subTitle: node.company,
            logo: node.logo,
            summary: node.summary
          }))}
        />
      </PageContainer>
    </section>

    <section>
      <HeroBanner
        title="Education 📚"
        subTitle="The math is strong in this one"
      />
      <PageContainer>
        <VerticalTimeLine
          type="education"
          events={data.educations.edges.map(({ node }) => ({
            ...node,
            title: node.institution,
            subTitle: node.studyType + " in " + node.area,
            logo: node.logo,
            summary: node.summary
          }))}
        />
      </PageContainer>
    </section>

    <section>
      <HeroBanner
        title="Please say hi! 👋🏻"
        subTitle="Always happy to chat over a coffee or the world wide web"
        cta="Contact"
        ctaLink="mailto:alexander.chabo@gmail.com"
      />
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

export default Index;
