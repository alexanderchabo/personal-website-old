interface Date {
  month: number;
  year: number;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Basic {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  summary: string;
  location: Location;
}

interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: Date;
  endDate?: Date;
}

interface Work {
  company: string;
  position: string;
  summary: string;
  location: string;
  startDate: Date;
  logo?: string;
  endDate?: Date;
  website?: string;
  highlights?: string[];
}

interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

interface Language {
  language: string;
  fluency: string;
}

interface ResumeProps {
  basic?: Basic;
  works: Work[];
  educations?: Education[];
  skills?: Skill[];
  languages?: Language[];
}

const Resume: ResumeProps = {
  works: [
    {
      position: 'Software Engineer - Product',
      company: 'Uppercase',
      summary:
        'Powered the rebrand of the company by developing the platform and all its services, enabling the launch of pop-ups across North America. \nAlso Implemented the marketing automation framework increasing volume of inbound sales and total revenue.',
      location: 'Toronto, Canada',
      startDate: {
        month: 7,
        year: 2018
      }
    },
    {
      position: 'Software Engineer - Product',
      company: 'Uppercase',
      summary:
        'Powered the rebrand of the company by developing the platform and all its services, enabling the launch of pop-ups across North America. \nAlso Implemented the marketing automation framework increasing volume of inbound sales and total revenue.',
      location: 'Toronto, Canada',
      startDate: {
        month: 7,
        year: 2018
      },
      endDate: {
        month: 7,
        year: 2018
      }
    }
  ]
};

export default Resume;
