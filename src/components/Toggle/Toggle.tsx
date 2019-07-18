import * as React from 'react';

import ReactToggle from 'react-toggle';
import "react-toggle/style.css"

import sun from 'assets/icons/sun.png';
import moon from 'assets/icons/moon.png';

// Styles
import * as styles from './Toggle.module.scss';

class Toggle extends React.Component {
  state = {
    theme: null,
  };

  componentWillMount() {
    if (typeof window !== `undefined`) {
      this.setState({ theme: window.__theme });
    }
  }

  componentDidMount() {
    this.setState({ theme: window.__theme });

    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  render() {
    return (
      <ReactToggle
        checked={this.state.theme === 'dark'}
        className={styles.override}
        // icons={{
        //   checked: (
        //     <img
        //       src={moon}
        //       width="16"
        //       height="16"
        //       role="presentation"
        //       style={{ pointerEvents: 'none' }}
        //     />
        //   ),
        //   unchecked: (
        //     <img
        //       src={sun}
        //       width="16"
        //       height="16"
        //       role="presentation"
        //       style={{ pointerEvents: 'none' }}
        //     />
        //   ),
        // }}
        onChange={e =>
          window.__setPreferredTheme(
            e.target.checked ? 'dark' : 'light'
          )
        }
      />
    )
  }
}

export default Toggle
