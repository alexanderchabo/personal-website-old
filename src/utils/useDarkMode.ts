import * as React from "react";

type Theme = "dark" | "light";

export const useDarkMode = () => {
  const [theme, setTheme] = React.useState<Theme>(
    typeof window !== "undefined" ? getInitialTheme() : "light"
  );

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  function getInitialTheme() {
    const localTheme = localStorage.getItem("theme") as Theme;

    if (localTheme) {
      return localTheme;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else {
      return "light";
    }
  }

  return [theme, setTheme] as const;
};
