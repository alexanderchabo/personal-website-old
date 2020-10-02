import * as React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO/SEO";
import HeroBanner from "components/HeroBanner/HeroBanner";

const Index: React.FC = () => (
  <Layout>
    <SEO title="Software Engineer" />

    <section>
      <HeroBanner
        title="I'm Alex!"
        subTitle="An organism that turns caffeine into software"
        isFullHeight={true}
      />
    </section>
  </Layout>
);

export default Index;
