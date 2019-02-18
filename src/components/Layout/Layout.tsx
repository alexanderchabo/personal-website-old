import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import PageTransition from 'gatsby-v2-plugin-page-transitions';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: any;
}

interface MenuLink {
  name: string;
  link: string;
}

interface LayoutPropsWithData extends LayoutProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        menuLinks: MenuLink[];
      };
    };
  };
}

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        menuLinks {
          name
          link
        }
      }
    }
  }
`;

const Layout: React.SFC<LayoutPropsWithData> = ({ children, data }) => (
  <>
    <Header
      siteTitle={data.site.siteMetadata.title}
      menuLinks={data.site.siteMetadata.menuLinks}
    />
    <PageTransition>
      <main>{children}</main>
      <Footer />
    </PageTransition>
  </>
);

export default (props: LayoutProps) => (
  <StaticQuery
    query={layoutQuery}
    render={data => <Layout data={data} {...props} />}
  />
);
