import React from 'react';
import { Helmet } from 'react-helmet';

const Head = (props) => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Neeraj Lagwankar" />
        <meta
          name="description"
          content="Personal Website of Neeraj Lagwankar"
        />
        <html lang="en" amp />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="bLKH-xkzCKP2YUvhotEuL0NvIRQmHI_DnFkkqRS5sJA"
        />
      </Helmet>
    </div>
  );
};

export default Head;
