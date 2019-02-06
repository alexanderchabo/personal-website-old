import Link from '../Link/Link';
import * as React from 'react';
import Headroom from 'react-headroom';

import * as styles from './Header.module.scss';

interface MenuLink {
  name: string;
  link: string;
}

interface HeaderProps {
  siteTitle: string;
  menuLinks: MenuLink[];
}

const Header: React.SFC<HeaderProps> = ({ siteTitle = '', menuLinks }) => (
  <Headroom>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.h1}>
          <Link to='/'>{'AC'}</Link>
        </h1>
        <nav className={styles.nav}>
          <ul>
            {menuLinks.map(link => (
              <li key={link.name} style={{ listStyleType: 'none' }}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  </Headroom>
);

export default Header;
