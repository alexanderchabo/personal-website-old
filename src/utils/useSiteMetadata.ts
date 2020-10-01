import { useStaticQuery, graphql } from 'gatsby';

interface MenuLink {
  name: string;
  link: string;
}

interface Social {
  linkedIn: string;
  github: string;
  email: string;
}

interface StaticQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
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
        social {
          linkedIn
          github
          email
        }
      }
    }
  }
`;

const useSiteMetadata = () =>
  (useStaticQuery(Query) as StaticQuery).site.siteMetadata;

export default useSiteMetadata;
