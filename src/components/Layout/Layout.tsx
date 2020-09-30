import * as React from "react";

// Components
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div
    style={{
      color: "var(--textNormal)",
      backgroundColor: "var(--bg)",
      transition: "color 0.2s ease-out, background 0.2s ease-out",
      minHeight: "100vh",
    }}
  >
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
