import * as React from "react";
import Layout from "components/Layout/Layout";
import SEO from "components/SEO/SEO";
import HeroBanner from "components/HeroBanner/HeroBanner";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeroBanner
      title="404"
      subTitle="You just hit a route that doesn't exist... the sadness."
    />
  </Layout>
);

export default NotFoundPage;
