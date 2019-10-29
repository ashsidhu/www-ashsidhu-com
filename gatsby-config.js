module.exports = {
  siteMetadata: {
    title: `Ashmeet Sidhu`,
    description: `Web Application Architect and Engineering Mentor, based in Vancouver, BC.`,
    author: `@ashsidhu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ashmeet Sidhu`,
        short_name: `Ashmeet Sidhu`,
        start_url: `/`,
        background_color: `#3A393A`,
        theme_color: `#DB2B39`,
        display: `standalone`,
        icon: `src/images/Ashmeet.jpg`,
        // cache_busting_mode: `query` by default
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
