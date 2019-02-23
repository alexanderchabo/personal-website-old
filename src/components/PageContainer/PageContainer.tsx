import * as React from 'react';

// Styles
import * as styles from './PageContainer.module.scss';

interface PageContainerProps {
  children: any;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default PageContainer;
