const theme = {
  breakpoints: ['360px', '960px', '1024px'],
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  space: [0, 4, 8, 12, 16, 20, 32, 48, 64, 128, 256, 512],
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
    content: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      color: 'text',
      textDecoration: 'none',
      '&:hover': {
        color: '#0059c1',
      },
    },
    title: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      color: 'title',
      textDecoration: 'none',
      '&:hover': {
        color: '#0059c1',
      },
    },
    viewCount: {
      fontFamily: 'body',
      color: 'text',
      fontStyle: 'italic',
    },
  },
  sizes: {
    container: 960,
  },
  styles: {
    root: {
      ul: {
        li: {
          marginBottom: 'calc(1.5rem / 2)',
        },
        marginLeft: '1.25rem',
        padding: 0,
      },
    },
    p: {
      fontFamily: 'body',
      lineHeight: 'body',
      color: 'text',
    },
    ol: {
      marginLeft: '1.25rem',
      padding: 0,
    },
    li: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    a: {
      fontFamily: 'body',
      color: 'title',
      textDecoration: 'none',
      '&:hover': {
        color: '#0059c1',
      },
    },
    h1: {
      fontFamily: 'heading',
      '.remarkLink': {
        fill: 'text',
        marginRight: '10px',
      },
      color: 'text',
    },
    h2: {
      fontFamily: 'heading',
      '.remarkLink': {
        fill: 'text',
        marginRight: '10px',
      },
      color: 'text',
    },
    h3: {
      fontFamily: 'heading',
      '.remarkLink': {
        fill: 'text',
        marginRight: '10px',
      },
      color: 'text',
    },
    h4: {
      fontFamily: 'heading',
      '.remarkLink': {
        fill: 'text',
        marginRight: '10px',
      },
    },
  },
};

export default theme;
