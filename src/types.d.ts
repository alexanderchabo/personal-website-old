declare module 'react-reveal';

declare module '*.svg';
declare module '*.png';

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

interface Window {
  __theme: any;
  __onThemeChange: any;
  __setPreferredTheme: any;
}
