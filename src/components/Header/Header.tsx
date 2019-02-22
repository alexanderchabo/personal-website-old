import * as React from 'react';
import Headroom from 'react-headroom';

// Components
import PageContainer from '../PageContainer/PageContainer';
import Link from '../Link/Link';

// Styles
import * as styles from './Header.module.scss';

// Utils
import useSiteMetadata from '../../utils/useSiteMetadata';

const Header: React.FC = () => {
  const { menuLinks } = useSiteMetadata();

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
};

export default Header;
