import * as React from 'react';
import * as styles from './Experiences.module.scss';
import Img, { FixedObject } from 'gatsby-image';

interface Date {
  month?: number;
  year?: number;
}

interface Experience {
  startDate: Date;
  endDate: Date;
  location?: string;
  title: string;
  subTitle: string;
  summary?: string;
  logo: any;
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
    <div className={styles.displayGrid}>
      {experiences.map(
        ({
          startDate,
          title,
          subTitle,
          summary,
          endDate,
          location,
          logo
        }: Experience) => (
          <div className={styles.experienceCardContainer}>
            {logo && (
              <div className={styles.experienceCardHeader}>
                <Img fixed={logo} />
              </div>
            )}
            <div className={styles.experienceCardBody}>
              <div className={styles.dateAndLocation}>{`${mapDateToString(
                startDate
              )} to ${mapDateToString(endDate)}\n${location}`}</div>

              <div className={styles.titles}>
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
              </div>

              <p>{summary}</p>
            </div>
          </div>
        )
      )}
    </div>
  </section>
);

export default Experiences;
