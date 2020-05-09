export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 12, 16, 20, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  colors: {
    text: '#333333',
    background: '#ffffff',
    primary: '#308fff',
    '&:hover': {
      text: '#0059c1',
    },
    modes: {
      dark: {
        text: '#ffffff',
        background: '#1d1d1d',
        primary: '#308fff',
      },
    },
  },
  text: {
    heading: {
      color: 'text',
      textDecoration: 'none',
      '&:hover': {
        color: '#0059c1',
      },
    },
  },
  sizes: {
    container: 720,
  },
  styles: {
    a: {
      color: 'primary',
      textDecoration: 'none',
      '&:hover': {
        color: '#0059c1',
      },
    },
  },
};
