import React from 'react';
import { Helmet } from 'react-helmet';

const Head = (props) => {
  const ogURL = `https://flashblaze.xyz/${props.slug}`;
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Neeraj Lagwankar" />
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="bLKH-xkzCKP2YUvhotEuL0NvIRQmHI_DnFkkqRS5sJA"
        />
        <meta property="og:url" content={ogURL} />
        <meta property="og:description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta
          property="og:image"
          content="https://flashblaze.xyz/og_image.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:creator"
          content="https://twitter.com/neeraj_artx"
        />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <html lang="en" />
      </Helmet>
    </div>
  );
};

export default Head;
