import * as React from 'react';
import Img, { FixedObject } from 'gatsby-image';
import {
  VerticalTimeline as VerticalTimelineBase,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Components
import Icon from 'components/Icon/Icon';

// Utils
import { mapDatesToString } from 'utils/dateFormatter';

// Styles
import * as styles from './VerticalTimeLine.module.scss';

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
  logo: FixedObject;
}

interface VerticalTimeLineProps {
  events: Event[];
  type: 'work' | 'education';
}

const VerticalTimeLine: React.FC<VerticalTimeLineProps> = ({
  events,
  type
}) => (
  <VerticalTimelineBase className={styles.timeLineBugFix}>
    {events.map(
      ({
        title,
        subTitle,
        summary,
        startDate,
        endDate,
        location,
        logo
      }: Event) => (
        <VerticalTimelineElement
          className={`vertical-timeline-element--${type}`}
          date={`${mapDatesToString(startDate, endDate)}\n${location}`}
          iconStyle={{
            background: 'rgb(0, 60, 200)',
            color: '#fff'
          }}
        >
          {logo && <Img className={styles.logo} fixed={logo} />}
          <h3 className='vertical-timeline-element-title'>{title}</h3>
          <h4 className='vertical-timeline-element-subtitle'>{subTitle}</h4>
          <p>{summary}</p>
        </VerticalTimelineElement>
      )
    )}
  </VerticalTimelineBase>
);

export default VerticalTimeLine;
