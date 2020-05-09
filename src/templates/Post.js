/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import ViewCounter from '../components/ViewCounter';
import SEO from '../components/SEO';

export const query = graphql`
  query($slug: String!) {
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
        css={`
          display: 'flex';
          max-width: 720px;
          width: 720px;
          padding: 10px;
          margin-top: 125px;
          @media (max-width: 360px) {
            width: 320px;
            margin-top: 50px;
            padding: 20px;
          }

          @media (max-width: 720px) {
            width: 340px;
            margin-top: 50px;
          }
        `}
      >
        <SEO
          title={props.data.mdx.frontmatter.title}
          description={props.data.mdx.frontmatter.description}
          slug={'posts/' + postSlug}
        />
        <div sx={{ mb: 7 }}>
          <h1>{props.data.mdx.frontmatter.title}</h1>
          <div sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{parsedDate}</p>
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
