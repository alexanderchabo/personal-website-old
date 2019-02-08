import * as React from 'react';
import * as styles from './Experiences.module.scss';

interface Date {
  month?: number;
  year?: number;
}

interface Experience {
  startDate: Date;
  endDate: Date;
  location: string;
  title: string;
  subTitle: string;
  summary: string;
}

interface ExperiencesProps {
  heading: string;
  experiences: Experience[];
}

const mapDateToString = ({ month, year }: Date) =>
  month && year ? `${month.toString().padStart(2, '0')}/${year}` : 'present';

const Experiences: React.SFC<ExperiencesProps> = ({ heading, experiences }) => (
  <section>
    <h2 className={styles.tableHeader}>{heading}</h2>
    <table className={styles.table}>
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
            <td>
              <h3>{title}</h3>
              <h4>{subTitle}</h4>
              <p>{summary}</p>
            </td>
            <td>
              <small style={{ whiteSpace: 'nowrap' }}>
                {`${mapDateToString(startDate)} to ${mapDateToString(endDate)}`}
              </small>
              <br />
              <small>{location}</small>
            </td>
          </tr>
        )
      )}
    </table>
  </section>
);

export default Experiences;
