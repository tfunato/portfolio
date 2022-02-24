import { GatsbyConfig, PluginRef } from 'gatsby'

const siteMetadata = {
  title: `Gatsby Default Starter`,
  description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  author: `@tfunato`,
}

const plugins: PluginRef[] = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/trashcan.png`,
    },
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-typescript`,
]

export default { siteMetadata, plugins } as GatsbyConfig
