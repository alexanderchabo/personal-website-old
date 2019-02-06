import * as React from 'react';
import * as styles from './Experiences.module.scss';

interface Date {
  month: number;
  year: number;
}

interface Experience {
  startDate: Date;
  endDate?: Date;
  location: string;
  title: string;
  subTitle: string;
  summary: string;
}

interface ExperiencesProps {
  heading: string;
  experiences: Experience[];
}

const mapDateToString = (date: Date) =>
  date ? `${date.month.toString().padStart(2, '0')}/${date.year}` : 'present';

const Experiences: React.SFC<ExperiencesProps> = ({ heading, experiences }) => (
  <section>
    <h2>{heading}</h2>
    {experiences.map(
      ({
        startDate,
        title,
        subTitle,
        summary,
        endDate,
        location
      }: Experience) => (
        <tr>
          <td className={styles.entry}>
            <div style={{ whiteSpace: 'nowrap' }}>
              {`${mapDateToString(startDate)} to ${mapDateToString(endDate)}`}
            </div>
            <div>{location}</div>
          </td>
          <td>
            <h3>{title}</h3>
            <sub>{subTitle}</sub>
            <p>{summary}</p>
          </td>
        </tr>
      )
    )}
  </section>
);

export default Experiences;
