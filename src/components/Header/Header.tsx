import * as React from "react";
import Link from "components/Link/Link";
import "./Header.module.scss";
import { useDeviceType } from "src/utils/useDeviceType";
import SocialBar from "../SocialBar/SocialBar";

const Header: React.FC = () => {
  const { isDesktop } = useDeviceType();

  return (
    <header>
      <h2>
        <Link to="/">{"AC"}</Link>
      </h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      {isDesktop && <SocialBar />}
    </header>
  );
};

export default Header;
