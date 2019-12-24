module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Neeraj Lagwankar`,
        short_name: `Neeraj Lagwankar`,
        description: `Personal website of Neeraj Lagwankar`,
        lang: `en`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `static/icon.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        precachePages: [`/wip/`],
      },
    },
  ],
};
