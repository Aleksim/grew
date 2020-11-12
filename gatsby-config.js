/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-sharp`,`gatsby-transformer-sharp`,{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Permanent Marker`, "Roboto"],
        display: "swap",
      },
    }, ]
}
