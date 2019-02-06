import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import * as styles from './Layout.module.scss';

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
        social {
          github
          linkedin
        }
      }
    }
  }
`;

const Layout: React.SFC<LayoutPropsWithData> = ({ children, data }) => (
  <PageTransition>
    <Header
      siteTitle={data.site.siteMetadata.title}
      menuLinks={data.site.siteMetadata.menuLinks}
    />
    <div className={styles.mainContainer}>
      <main>{children}</main>
      <Footer />
    </div>
  </PageTransition>
);

export default (props: LayoutProps) => (
  <StaticQuery
    query={layoutQuery}
    render={data => <Layout data={data} {...props} />}
  />
);
