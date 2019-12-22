import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '700'],
    },
  ],
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;
