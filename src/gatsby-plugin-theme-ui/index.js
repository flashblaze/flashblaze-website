export default {
  breakpoints: ['360px', '720px', '1024px'],
  space: [0, 4, 8, 12, 16, 20, 32, 48, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  colors: {
    text: '#333333',
    background: '#ffffff',
    primary: '#0070f3',
    '&:hover': {
      text: '#0059c1',
    },
    title: '#0070f3',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#1d1d1d',
        primary: '#0070f3',
        title: '#308fff',
      },
    },
  },
  layout: {
    card: {
      maxWidth: '470px',
      height: '150px',
      backgroundColor: 'primary',
      transitionProperty: 'boxShadow',
      transition: '0.2s ease 0s',
      borderRadius: '5px',
      padding: 5,
      color: '#ffffff',
      '&:hover': {
        boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.25)',
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
    title: {
      color: 'title',
      textDecoration: 'none',
      '&:hover': {
        color: '#0059c1',
      },
    },
    viewCount: {
      color: '#text',
      fontStyle: 'italic',
    },
  },
  sizes: {
    container: 720,
  },
  styles: {
    a: {
      color: 'title',
      textDecoration: 'none',
      '&:hover': {
        color: '#0059c1',
      },
    },
    h1: {
      '.remarkLink': {
        fill: 'text',
        marginRight: '10px',
      },
    },
  },
};
