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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
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
