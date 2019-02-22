import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Headroom from 'react-headroom';

// Components
import PageContainer from '../PageContainer/PageContainer';
import Link from '../Link/Link';

// Styles
import * as styles from './Header.module.scss';

interface MenuLink {
  name: string;
  link: string;
}

interface HeaderQuery {
  site: {
    siteMetadata: {
      title: string;
      menuLinks: MenuLink[];
    };
  };
}

const headerQuery = graphql`
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

const Header: React.FC = () => {
  const data: HeaderQuery = useStaticQuery(headerQuery);

  return (
    <header>
      <Headroom disableInlineStyles>
        <PageContainer>
          <div className={styles.header}>
            <h2 className={styles.h2}>
              <Link to='/'>{'AC'}</Link>
            </h2>
            <nav className={styles.nav}>
              <ul>
                {data.site.siteMetadata.menuLinks.map(link => (
                  <li key={link.name}>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </PageContainer>
      </Headroom>
    </header>
  );
};

export default Header;
