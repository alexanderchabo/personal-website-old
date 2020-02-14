import * as React from "react";
import Img, { FixedObject } from "gatsby-image";
import {
  VerticalTimeline as VerticalTimelineBase,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Document } from "@contentful/rich-text-types";

// Utils
import { richTextFormatter } from "src/utils/textFormatter";

// Styles
import * as styles from "./VerticalTimeLine.module.scss";

interface Event {
  dateStarted: string;
  dateEnded: string;
  location: string;
  title: string;
  subTitle: string;
  summary: {
    json: Document;
  };
  logo: Logo;
}

interface Logo {
  fixed?: FixedObject;
  file: {
    contentType: string;
    url: string;
  };
}

interface VerticalTimeLineProps {
  events: Event[];
  type: "work" | "education";
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
        dateStarted,
        dateEnded,
        location,
        logo
      }: Event) => (
        <VerticalTimelineElement
          key={`${title}--${subTitle}`}
          className={`vertical-timeline-element--${type}`}
          date={`${dateStarted} to ${
            dateEnded ? dateEnded : "present"
          }\n${location}`}
        >
          {logo && handleLogo(logo)}
          <h3 className="vertical-timeline-element-title">{title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
          {summary && richTextFormatter(summary.json)}
        </VerticalTimelineElement>
      )
    )}
  </VerticalTimelineBase>
);

const handleLogo = (logo: Logo) =>
  logo.file.contentType === "image/svg+xml" ? (
    <img className={styles.logo} src={logo.file.url} width="200" />
  ) : (
    <Img className={styles.logo} fixed={logo.fixed} />
  );

export default VerticalTimeLine;
