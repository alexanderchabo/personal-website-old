import * as React from 'react';
import PageTransition from 'gatsby-v2-plugin-page-transitions';

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div
    style={{
      color: 'var(--textNormal)',
      background: 'var(--bg)',
      transition: 'color 0.2s ease-out, background 0.2s ease-out',
      minHeight: '100vh'
    }}
  >
    <Header />
    {/* <PageTransition> */}
    <main>{children}</main>
    <Footer />
    {/* </PageTransition> */}
  </div>
);

export default Layout;
