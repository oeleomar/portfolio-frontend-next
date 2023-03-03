import * as Styled from "./styles";
import { GithubOutline } from "@styled-icons/evaicons-outline";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { LinkedinOutline } from "@styled-icons/evaicons-outline";
import { TwitterOutline } from "@styled-icons/evaicons-outline";
import { Star } from "@styled-icons/bootstrap/Star";
import { GitBranch } from "@styled-icons/boxicons-regular/GitBranch";
import { useInView } from "react-intersection-observer";
import { FooterProps } from "../../../types/portfolio";

export type FooterTemplateProps = {
  footer: FooterProps;
};

export const Footer = ({ footer }: FooterTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Styled.FooterIcons>
        <div className="animation-fade"></div>
        <ul>
          {footer.github && (
            <li className="animation-top delay3">
              <a target="_blank" href={footer.linkGithub}>
                <GithubOutline size={22} />
              </a>
            </li>
          )}
          {footer.linkedin && (
            <li className="animation-top delay2">
              <a target="_blank" href={footer.linkLinkedin}>
                <LinkedinOutline size={22} />
              </a>
            </li>
          )}
          {footer.instagram && (
            <li className="animation-top delay1">
              <a target="_blank" href={footer.linkInstagram}>
                <Instagram size={22} />
              </a>
            </li>
          )}
        </ul>
      </Styled.FooterIcons>
      <Styled.FooterText className="animation-fade">
        <a href={footer.linkDesign} target="_blank">
          Designed By Brittany Chiang
        </a>
        <span> & </span>
        <a href={footer.linkEleomar} target="_blank">
          Created in Next.js by Eleomar Dorneles
        </a>
        <div>
          <Star size={12} />
          <span>5.931</span>
          <GitBranch size={12} />
          <span>5.931</span>
        </div>
      </Styled.FooterText>
      <Styled.FooterEmail>
        <div className="animation-fade"></div>
        <p className="animation-fade">
          <a href={footer.linkEmail}>{footer.email}</a>
        </p>
      </Styled.FooterEmail>
    </Styled.Wrapper>
  );
};
