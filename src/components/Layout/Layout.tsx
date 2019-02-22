import * as React from 'react';
import PageTransition from 'gatsby-v2-plugin-page-transitions';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {/* <PageTransition> */}
    <main>{children}</main>
    <Footer />
    {/* </PageTransition> */}
  </>
);

export default Layout;
