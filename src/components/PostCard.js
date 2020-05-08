/**@jsx jsx  */
import { jsx } from 'theme-ui';
import { Link, graphql, useStaticQuery } from 'gatsby';

const PostCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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

  const newEdges = data.allMdx.edges.reduce((filtered, edge) => {
    if (!edge.node.fields.slug.startsWith('draft')) {
      filtered.push(edge);
    }
    return filtered;
  }, []);

  const latestPost = newEdges[newEdges.length - 1];
  const date = new Date(latestPost.node.frontmatter.date);
  const parsedDate = date.toUTCString().slice(0, 16);

  const title = latestPost.node.frontmatter.title;

  return (
    <Link to={`/posts/${latestPost.node.fields.slug}`}>
      <div
        css={`
          max-width: 450px;
          height: 150px;
          background: #308fff;
          transition: box-shadow 0.3s ease-in-out;
          border-radius: 20px;
          padding: 20px;
          color: #ffffff;
          &:hover {
            box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
          }
        `}
      >
        <h4>{title}</h4>
        <h6>{parsedDate}</h6>
      </div>
    </Link>
  );
};

export default PostCard;
