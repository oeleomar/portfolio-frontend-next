import { ExperiencesProps } from "../../../types/portfolio";
import { HeadingComponent } from "../../components/HeadingComponent";
import { Section } from "../../components/Section";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkOutline } from "@styled-icons/material-outlined/WorkOutline";
import { School } from "@styled-icons/material-outlined/School";

import * as Styled from "./styles";
import { theme } from "../../styles/theme";

export type ExperiencesPropsComponent = {
  experiences: ExperiencesProps[];
};

export const Experiences = ({ experiences }: ExperiencesPropsComponent) => {
  return (
    <Section id="experience">
      <HeadingComponent id="3" title="Experiencias" />
      <Styled.Wrapper>
        <VerticalTimeline lineColor={theme.colors.green}>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={Math.random()}
              dateClassName="date"
              date={`${new Date(experience.since).toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              })}${
                experience.until
                  ? ` - ${new Date(experience.since).toLocaleDateString(
                      "pt-BR",
                      {
                        timeZone: "UTC",
                      },
                    )}`
                  : " - Até o momento"
              }`}
              contentStyle={{
                backgroundColor: theme.colors.slate8,
              }}
              iconStyle={{
                color: theme.colors.green,
                backgroundColor: theme.colors.slate9,
                boxShadow: `0 0 0 4px ${theme.colors.green},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
              }}
              icon={experience.work ? <WorkOutline /> : <School />}
              contentArrowStyle={{
                borderRight: `7px solid ${theme.colors.slate8}`,
              }}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.title}
              </h3>
              {experience.city && experience.country && (
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.city}, {experience.country}
                </h4>
              )}
              <p className="vertical-timeline-element-description">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Styled.Wrapper>
    </Section>
  );
};
