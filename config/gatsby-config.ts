import { GatsbyConfig, PluginRef } from 'gatsby'

const siteMetadata = {
  title: `tfunato portfolio`,
  description: `tfunato portfolio`,
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
  {
    resolve: 'gatsby-source-microcms',
    options: {
      apiKey: process.env.MICRO_CMS_API_KEY,
      serviceId: process.env.MICRO_CMS_API_SERVICE_ID,
      apis: [
        {
          endpoint: 'career',
        },
      ],
    },
  },
  /*
  // if you need the graphql types then uncomment this
  {
    resolve: 'gatsby-plugin-graphql-codegen',
    options: {
      codegenConfig: { maybeValue: 'T | undefined' },
    },
  },
*/
  `gatsby-plugin-sass`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-plugin-typescript`,
]

export default { siteMetadata, plugins } as GatsbyConfig
