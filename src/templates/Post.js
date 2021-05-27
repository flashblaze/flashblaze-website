/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import ViewCounter from '../components/ViewCounter';
import SEO from '../components/SEO';

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
      }
      body
    }
  }
`;

const Post = (props) => {
  const [postSlug, setPostSlug] = useState('');

  useEffect(() => {
    setPostSlug(props.path.split('/')[2]);
  }, [props.path]);

  const date = new Date(props.data.mdx.frontmatter.date);
  const parsedDate = date.toUTCString().slice(0, 16);

  return (
    <Layout>
      <div
        sx={{
          display: 'flex',
          maxWidth: ['container', 'container', 'container'],
          flexDirection: 'column',
          mt: [7, 7, 9],
        }}
      >
        <SEO
          title={props.data.mdx.frontmatter.title}
          description={props.data.mdx.frontmatter.description}
          slug={'posts/' + postSlug}
        />
        <div sx={{ mb: 7 }}>
          <h1 sx={{ variant: 'text.content' }}>
            {props.data.mdx.frontmatter.title}
          </h1>
          <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <p sx={{ variant: 'text.content' }}>{parsedDate}</p>
            {postSlug ? <ViewCounter id={postSlug} /> : null}
          </div>
          <hr />
        </div>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export default Post;
