import * as React from 'react';
import Link from '../Link/Link';
import Headroom from 'react-headroom';

import * as styles from './Header.module.scss';
import PageContainer from '../PageContainer/PageContainer';

interface MenuLink {
  name: string;
  link: string;
}

interface HeaderProps {
  siteTitle: string;
  menuLinks: MenuLink[];
}

const Header: React.SFC<HeaderProps> = ({ siteTitle = '', menuLinks }) => (
  <header>
    <Headroom disableInlineStyles>
      <PageContainer>
        <div className={styles.header}>
          <h2 className={styles.h2}>
            <Link to='/'>{'AC'}</Link>
          </h2>
          <nav className={styles.nav}>
            <ul>
              {menuLinks.map(link => (
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

export default Header;
