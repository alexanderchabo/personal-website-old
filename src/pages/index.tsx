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
      <p
        style={{
          padding: "20px",
          textAlign: "center",
          margin: "0 auto",
          height: "40vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span>Born and raised in Sweden 🇸🇪</span>
        <span>Relocated in april 2018 to Canada 🇨🇦</span>
        <br /> <br />
        <span>Doing what I love most:</span>
        <b>Product development</b>
      </p>
    </section>
  </Layout>
);

export default Index;
