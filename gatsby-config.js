require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// const strapiConfig = {
//   // apiURL: process.env.STRAPI_API_URL,
//   apiURL: `http://localhost:1337/api`,
//   // accessToken: process.env.STRAPI_TOKEN,
//   queryLimit: 1000, // Defaults to 100
//   collectionTypes: [{ name: `job`, endpoint: `jobs/?populate=desc` }],
//   // singleTypes: [],
// };

module.exports = {
  /* Your site config here */

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://127.0.0.1:1337`,
    //     queryLimit: 1000,
    //     collectionTypes: [
    //       {
    //         name: `career`,
    //         endpoint: `api/careers/?populate=desc`,
    //       },
    //     ],
    //     // singleTypes: [],
    //   },
    // },
  ],
};
