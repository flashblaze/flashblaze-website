/**@jsx jsx */
import { jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const Posts = () => {
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

  const newEdges = data.allMdx.edges.filter(
    (edge) => !edge.node.fields.slug.startsWith('draft')
  );

  return (
    <div
      sx={{
        display: 'flex',
        maxWidth: ['container', 'container', 'container'],
        p: [5, 5, 3],
        mt: [7, 7, 9],
      }}
    >
      <div>
        {newEdges.map((edge) => {
          const date = new Date(edge.node.frontmatter.date);
          const parsedDate = date.toUTCString().slice(0, 16);

          return (
            <div
              sx={{ mb: 7, lineHeight: 0, fontSize: 2 }}
              key={edge.node.fields.slug}
            >
              <Link
                to={`/posts/${edge.node.fields.slug}`}
                sx={{ variant: 'text.title' }}
              >
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
