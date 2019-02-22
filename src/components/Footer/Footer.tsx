import * as React from 'react';
import { SocialIcon } from 'react-social-icons';

import * as styles from './Footer.module.scss';
import PageContainer from '../PageContainer/PageContainer';

// Utils
import useSiteMetadata from '../../utils/useSiteMetadata';

const Footer: React.FC = () => {
  const { social } = useSiteMetadata();

  return (
    <footer className={styles.footer}>
      <PageContainer>
        Built with <a href='https://www.gatsbyjs.org'>Gatsby</a>,{' '}
        <a href='https://reactjs.org/'>React</a> and ❤️. Hosted on{' '}
        <a href='https://www.netlify.com/'>Netlify</a>. The code is open source
        and available at{' '}
        <a href='https://github.com/alexanderchabo/alexanderchabo'>Github</a>.
        <div className={styles.socialBar}>
          {Object.values(social).map(key => (
            <SocialIcon
              className={styles.icon}
              bgColor='gray'
              url={key}
              style={{ height: 40, width: 40 }}
            />
          ))}
        </div>
      </PageContainer>
    </footer>
  );
};

export default Footer;
