import { useStaticQuery, graphql } from 'gatsby';

interface MenuLink {
  name: string;
  link: string;
}

interface Social {
  github: string;
  linkedIn: string;
  facebook: string;
  email: string;
}

interface StaticQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      menuLinks: MenuLink[];
      social: Social;
    };
  };
}

const Query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        menuLinks {
          name
          link
        }
        social {
          github
          linkedIn
          facebook
          email
        }
      }
    }
  }
`;

const useSiteMetadata = () =>
  (useStaticQuery(Query) as StaticQuery).site.siteMetadata;

export default useSiteMetadata;
