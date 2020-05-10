export default {
  breakpoints: ['360px', '720px', '1024px'],
  space: [0, 4, 8, 12, 16, 20, 32, 48, 64, 128, 256, 512],
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
  layout: {
    card: {
      maxWidth: '470px',
      height: '150px',
      backgroundColor: 'primary',
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.15)',
      transitionProperty: 'boxShadow',
      transition: '0.2s ease 0s',
      borderRadius: '20px',
      padding: 5,
      color: '#ffffff',
      '&:hover': {
        boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  text: {
    heading: {
      color: 'text',
      textDecoration: 'none',
      '&:hover': {
        color: '#308fff',
      },
    },
    title: {
      color: 'primary',
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
