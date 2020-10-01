const path = require('path');

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Alexander Chabo`,
    author: `Alexander Chabo`,
    description: `Personal website by Alexander Chabo`,
    siteUrl: 'https://alexanderchabo.com',
    social: {
      github: 'https://github.com/alexanderchabo',
      linkedIn: 'https://www.linkedin.com/in/alexanderchabo/',
      facebook: 'https://www.facebook.com/alexanderchabo',
      email: 'mailto:alexander.chabo@gmail.com'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_PRODUCTION_WRITE_KEY,
        devKey: process.env.SEGMENT_DEV_WRITE_KEY,
        trackPage: true,
        // delayLoad: false,
        // delayLoadTime: 1000
      }
    },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        utils: path.join(__dirname, 'src/utils'),
        assets: path.join(__dirname, 'src/assets')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, 'src/pages')
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alexander Chabo`,
        short_name: `Alexander Chabo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffa7c4`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
        theme_color_in_head: false
      }
    },
    `gatsby-plugin-offline`
  ]
};
