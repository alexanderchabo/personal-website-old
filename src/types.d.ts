declare module 'react-reveal';

declare module '*.svg';
declare module '*.png';

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
