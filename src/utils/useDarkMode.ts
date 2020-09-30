import * as React from "react";

type Theme = 'dark' | 'light';

export const useDarkMode = () => {
  const [theme, setTheme] = React.useState<Theme>(getInitialValue())

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function getInitialValue() {
    const localTheme = window.localStorage.getItem('theme') as Theme

    if (localTheme) {
      return localTheme;
    };

    if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    };

    return 'light'
  }

  return [theme, setTheme] as const
}
