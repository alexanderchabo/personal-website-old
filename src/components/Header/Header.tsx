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
    <Headroom
      style={{
        zIndex: 10
      }}
    >
      <div className={styles.headerContainer}>
        <PageContainer>
          <div className={styles.header}>
            <h1 className={styles.h1}>
              <Link to='/'>{'AC'}</Link>
            </h1>
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
      </div>
    </Headroom>
  </header>
);

export default Header;
