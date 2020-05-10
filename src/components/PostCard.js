/**@jsx jsx  */
import { Link, jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';

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

  console.log(newEdges);
  const latestPost = newEdges[0];
  const date = new Date(latestPost.node.frontmatter.date);
  const parsedDate = date.toUTCString().slice(0, 16);

  const title = latestPost.node.frontmatter.title;

  return (
    <Link href={`/posts/${latestPost.node.fields.slug}`}>
      <div sx={{ variant: 'layout.card' }}>
        <h4>{title}</h4>
        <h6>{parsedDate}</h6>
      </div>
    </Link>
  );
};

export default PostCard;
