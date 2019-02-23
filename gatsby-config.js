const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Alexander Chabo`,
    description: `Resume`,
    author: `@alexanderchabo`,
    menuLinks: [
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'contact',
        link: '/contact'
      }
    ],
    social: {
      github: 'https://github.com/alexanderchabo',
      linkedIn: 'https://www.linkedin.com/in/alexanderchabo/',
      facebook: 'https://www.facebook.com/alexanderchabo',
      email: 'mailto:alexander.chabo@gmail.com'
    }
  },
  plugins: [
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
        path: path.join(__dirname, 'static/assets'),
        name: 'assets'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, 'src/pages')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images-v2`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 930,
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-v2-plugin-page-transitions`,
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
          include: /assets/
        }
      }
    }
  ]
};
