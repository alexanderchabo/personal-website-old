import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import { graphql, StaticQuery } from 'gatsby';

import * as styles from './Footer.module.scss';
import PageContainer from '../PageContainer/PageContainer';

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          github
          linkedin
        }
      }
    }
  }
`;

interface FooterProps {
  data: {
    site: {
      siteMetadata: {
        social: {
          github: string;
          linkedin: string;
        };
      };
    };
  };
}

const Footer: React.SFC<FooterProps> = ({ data }) => (
  <PageContainer>
    <footer className={styles.footer}>
      Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>,{' '}
      <a href='https://reactjs.org/'>React</a> and ❤️. Hosted on{' '}
      <a href='https://www.netlify.com/'>Netlify</a>. The code is open source
      and available at{' '}
      <a href='https://github.com/alexanderchabo/alexanderchabo'>Github</a>.
      <div className={styles.socialBar}>
        {Object.values(data.site.siteMetadata.social).map(key => (
          <SocialIcon url={key} style={{ height: 24, width: 24 }} />
        ))}
      </div>
    </footer>
  </PageContainer>
);

export default () => (
  <StaticQuery query={footerQuery} render={data => <Footer data={data} />} />
);
