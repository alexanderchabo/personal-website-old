import * as React from 'react';
import Img, { FixedObject } from 'gatsby-image';

import {
  VerticalTimeline as VerticalTimelineBase,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { mapDatesToString } from '../../utils/dateFormatter';

import * as styles from './VerticalTimeLine.module.scss';
import Icon from '../Icon/Icon';

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

interface VerticalTimeLineProps {
  events: Event[];
  type: 'work' | 'education';
}

const VerticalTimeLine: React.SFC<VerticalTimeLineProps> = ({
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
            background:
              type === 'work' ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)',
            color: '#fff'
          }}
          icon={
            type === 'work' ? <Icon icon='github' /> : <Icon icon='messenger' />
          }
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
