import * as React from 'react';
import * as styles from './TimeLine.module.scss';
// import Img, { FixedObject } from 'gatsby-image';

interface Date {
  month?: number;
  year?: number;
}

interface Event {
  startDate: Date;
  endDate: Date;
  location?: string;
  title: string;
  subTitle: string;
  summary?: string;
  logo: any;
}

interface TimeLineProps {
  events: Event[];
}

const mapDateToString = ({ month, year }: Date) =>
  month && year ? `${month.toString().padStart(2, '0')}/${year}` : 'present';

const TimeLine: React.FC<TimeLineProps> = ({ events }) => (
  <section>
    <div className={styles.displayGrid}>
      {events.map(
        ({
          startDate,
          title,
          subTitle,
          summary,
          endDate,
          location,
          logo
        }: Event) => (
          <div className={styles.experienceCardContainer}>
            {/* {logo && (
              <div className={styles.experienceCardHeader}>
                <Img fixed={logo} />
              </div>
            )} */}
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

export default TimeLine;
