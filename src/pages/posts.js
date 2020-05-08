import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Posts from '../components/Posts/Posts';

const Index = () => {
  return (
    <Layout>
      <SEO title="Posts" description="My writings" slug="posts" />
      <Posts />
    </Layout>
  );
};

export default Index;
