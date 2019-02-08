import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import PageTransition from 'gatsby-v2-plugin-page-transitions';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeroBanner from '../HeroBanner/HeroBanner';

import * as styles from './Layout.module.scss';

interface LayoutProps {
  children: any;
  hideHeroBanner?: boolean;
  heroBannerSrcUrl?: string;
  heroBannerType?: 'video' | 'image';
  heroBannerBody?: JSX.Element;
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
  hideHeroBanner = false,
  heroBannerType = 'image',
  heroBannerSrcUrl = '',
  heroBannerBody = <React.Fragment />
}) => (
  <PageTransition>
    <Header
      siteTitle={data.site.siteMetadata.title}
      menuLinks={data.site.siteMetadata.menuLinks}
    />
    {!hideHeroBanner && (
      <HeroBanner
        type={heroBannerType}
        srcUrl={heroBannerSrcUrl}
        body={heroBannerBody}
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
