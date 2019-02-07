import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import PageTransition from 'gatsby-v2-plugin-page-transitions';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import * as styles from './Layout.module.scss';
import HeroBanner from '../HeroBanner/HeroBanner';

interface LayoutProps {
  children: any;
  displayHeroBanner?: boolean;
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

const Layout: React.SFC<LayoutPropsWithData> = ({
  children,
  data,
  displayHeroBanner = false
}) => (
  <PageTransition>
    <Header
      siteTitle={data.site.siteMetadata.title}
      menuLinks={data.site.siteMetadata.menuLinks}
    />
    {displayHeroBanner && (
      <HeroBanner
        body={
          <div className={styles.heroBannerBody}>
            <h1>Hi, I'm Alexander Chabo.</h1>
            <p>a Software Engineer.</p>
          </div>
        }
      />
    )}
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
