import * as React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO/SEO";
import HeroBanner from "components/HeroBanner/HeroBanner";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section>
      <HeroBanner
        title="Want to connect?"
        subTitle="Always happy to chat over a coffee or the world wide web"
        cta="Contact"
        ctaLink="mailto:alexander.chabo@gmail.com"
        isFullHeight={true}
      />
    </section>
  </Layout>
);

export default Contact;
