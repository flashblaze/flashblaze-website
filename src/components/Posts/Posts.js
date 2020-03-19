import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
    <div>
      <h1>Posts</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <Link to={`/posts/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
              </Link>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Posts;
