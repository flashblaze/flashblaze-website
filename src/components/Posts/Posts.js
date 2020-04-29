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

  const newEdges = data.allMarkdownRemark.edges.reduce((filtered, edge) => {
    if (!edge.node.fields.slug.startsWith('draft')) {
      filtered.push(edge);
    }
    return filtered;
  }, []);

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.pageHeading}>Posts</h1> */}
      <div className={styles.posts}>
        {newEdges.map((edge) => {
          const date = new Date(edge.node.frontmatter.date);
          const parsedDate = date.toUTCString().slice(0, 16);

          return (
            <div className={styles.post} key={edge.node.fields.slug}>
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
