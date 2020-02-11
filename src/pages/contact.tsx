import * as React from "react";
import { Fade } from "react-reveal";

// Components
import Layout from "components/Layout/Layout";
import SEO from "components/SEO/SEO";
import HeroBanner from "components/HeroBanner/HeroBanner";
import PageContainer from "components/PageContainer/PageContainer";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <HeroBanner title="Say Hi!" subTitle="It never hurts to be friendly" />
    <PageContainer>
      <Fade bottom={true} delay={500}>
        <p
          style={{
            maxWidth: "500px",
            margin: "1rem auto",
            textAlign: "center"
          }}
        >
          Get in touch with me by clicking{" "}
          <a href="mailto:alexander.chabo@gmail.com">here</a>
        </p>
      </Fade>
    </PageContainer>
  </Layout>
);

export default Contact;
