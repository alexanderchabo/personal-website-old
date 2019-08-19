import * as React from 'react';
import Headroom from 'react-headroom';

// Components
import PageContainer from 'components/PageContainer/PageContainer';
import Link from 'components/Link/Link';
import Toggle from 'src/components/Toggle/Toggle';

// Icons
import sun from 'assets/images/sun.png';
import moon from 'assets/images/moon.png';

// Styles
import * as styles from './Header.module.scss';

class Header extends React.Component<any, any> {
  state = {
    theme: null,
  };

  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  render() {
    return (
      <header>
        <Headroom disableInlineStyles>
          <PageContainer>
            <div className={styles.header}>
              <h2 className={styles.h2}>
                <Link to="/">{'AC'}</Link>
              </h2>
              {this.state.theme !== null ? (
                <Toggle
                  icons={{
                    checked: (
                      <img
                        src={moon}
                        width="16"
                        height="16"
                        role="presentation"
                        style={{ pointerEvents: 'none' }}
                      />
                    ),
                    unchecked: (
                      <img
                        src={sun}
                        width="16"
                        height="16"
                        role="presentation"
                        style={{ pointerEvents: 'none' }}
                      />
                    )
                  }}
                  checked={this.state.theme === 'dark'}
                  onChange={e =>
                    window.__setPreferredTheme(
                      e.target.checked ? 'dark' : 'light'
                    )
                  }
                />
              ) : (
                <div style={{ height: '24px' }} />
              )}
            </div>
          </PageContainer>
        </Headroom>
      </header>
    );
  }
}

export default Header;
