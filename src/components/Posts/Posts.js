import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <div>
      <h1>Posts</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Posts;
