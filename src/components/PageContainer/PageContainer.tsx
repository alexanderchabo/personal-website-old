import * as React from 'react';
import * as styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: any;
}

const PageContainer: React.SFC<PageContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default PageContainer;
