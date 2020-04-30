const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const fileName = path.basename(
      node.fileAbsolutePath,
      path.extname(node.fileAbsolutePath)
    );
    let slug = '';
    if (fileName.startsWith('draft')) {
      slug = fileName;
    } else {
      slug = fileName.slice(11, fileName.length);
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/Post.js');
  const res = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  res.data.allMdx.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/posts/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
