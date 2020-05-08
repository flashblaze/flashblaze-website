import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import styles from './styles.module.scss';
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
      <div className={styles.container}>
        <SEO
          title={props.data.mdx.frontmatter.title}
          description={props.data.mdx.frontmatter.description}
          slug={'posts/' + postSlug}
        />
        <div className={styles.metadata}>
          <h1>{props.data.mdx.frontmatter.title}</h1>
          <div className={styles.dateViews}>
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
