import React from 'react';

import Layout from '../components/Layout/Layout';
import Head from '../components/Head';
import About from '../components/About/About';

const Index = () => {
  return (
    <Layout>
      <Head title="About" />
      <About />
    </Layout>
  );
};

export default Index;
