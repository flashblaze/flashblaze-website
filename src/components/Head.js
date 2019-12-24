import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <div>
      <Helmet>
        <title>Neeraj Lagwankar</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Personal Website of Neeraj Lagwankar"
        />
        <meta name="author" content="Neeraj Lagwankar" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    </div>
  );
};

export default Head;
