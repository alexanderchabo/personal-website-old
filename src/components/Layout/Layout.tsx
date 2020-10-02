import * as React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import * as styles from "./Layout.module.scss";
import classNames from "classnames";
import { useDeviceType } from "src/utils/useDeviceType";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDesktop } = useDeviceType();

  return (
    <div className={classNames(isDesktop && styles.addLeftMargin)}>
      <Header />
      <div>
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout;
