import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import styles from './styles.module.scss';
import ViewCounter from '../components/ViewCounter';
import Head from '../components/Head';

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

const Post = (props) => {
  const [postSlug, setPostSlug] = useState('');

  useEffect(() => {
    setPostSlug(props.path.split('/')[2]);
  }, [props.path]);

  const date = new Date(props.data.markdownRemark.frontmatter.date);
  const parsedDate = date.toUTCString().slice(0, 16);

  return (
    <Layout>
      <div className={styles.container}>
        <Head title={props.data.markdownRemark.frontmatter.title} />
        <div className={styles.metadata}>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <div className={styles.dateViews}>
            <p>{parsedDate}</p>
            {postSlug ? <ViewCounter id={postSlug} /> : null}
          </div>

          <hr />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  );
};

export default Post;
