import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './styles.module.scss';

const Posts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.pageHeading}>Posts</h1> */}
      <div className={styles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          const date = new Date(edge.node.frontmatter.date);
          const parsedDate = date.toUTCString().slice(0, 16);

          return (
            <div className={styles.post}>
              <Link to={`/posts/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <p>{parsedDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
