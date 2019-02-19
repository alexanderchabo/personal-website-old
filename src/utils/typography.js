import Typography from 'typography';
import theme from 'typography-theme-fairy-gates';

theme.overrideThemeStyles = () => ({
  a: {
    color: '#003cc8',
    textShadow: 'none',
    backgroundImage: 'none'
  }
});
const typography = new Typography(theme);

export default typography;
