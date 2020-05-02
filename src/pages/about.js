import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import About from '../components/About/About';

const Index = () => {
  return (
    <Layout>
      <SEO title="About" description="Some information about me" slug="about" />
      <About />
    </Layout>
  );
};

export default Index;
