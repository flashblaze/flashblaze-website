import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18rem',
  baseLineHeight: 1.5,
  headerFontFamily: ['Rubik', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Rubik',
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
