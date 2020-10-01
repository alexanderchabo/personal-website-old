import * as React from "react";

// Components
import PageContainer from "components/PageContainer/PageContainer";

// Styles
import * as styles from "./Footer.module.scss";

const Footer: React.FC = () => {

  return (
    <footer className={styles.footer}>
      <PageContainer>
        Built with:
        <br/>

        <a href="https://www.gatsbyjs.org">Gatsby</a>,{" "}
        <a href="https://reactjs.org/">React</a>,{" "}
        <a href="https://www.contentful.com/">Contentful</a>,{" "}
        <a href="https://www.netlify.com/">Netlify</a>,{" "}
        <a href="https://www.bitmoji.com/">Bitmojis</a>, and ❤️

        <br/>
        <br/>

        The code is open source and available at
        {" "}
        <a href="https://github.com/alexanderchabo/alexanderchabo">Github</a>.
      </PageContainer>
    </footer>
  );
};

export default Footer;
