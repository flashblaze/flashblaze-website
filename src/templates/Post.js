import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import styles from './styles.module.scss';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Post = props => {
  const date = new Date(props.data.markdownRemark.frontmatter.date);
  const parsedDate = date.toUTCString().slice(0, 16);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.metadata}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{parsedDate}</p>
          <hr />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  );
};

export default Post;
