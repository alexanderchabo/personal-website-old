module.exports = {
  siteMetadata: {
    title: `Alexander Chabo`,
    description: `Resume`,
    author: `@alexanderchabo`,
    menuLinks: [
      {
        name: 'about',
        link: '/'
      },
      {
        name: 'work',
        link: '/work'
      },
      {
        name: 'contact',
        link: '/contact'
      }
    ],
    social: {
      github: 'https://github.com/alexanderchabo',
      linkedin: 'https://www.linkedin.com/in/alexanderchabo/'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-v2-plugin-page-transitions`,
    `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/assets/images/`
    //   }
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
    //   }
    // },
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
