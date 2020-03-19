import React from 'react';

import Layout from '../components/Layout/Layout';
import Head from '../components/Head';
import Posts from '../components/Posts/Posts';

const Index = () => {
  return (
    <Layout>
      <Head title="Posts" />
      <Posts />
    </Layout>
  );
};

export default Index;
