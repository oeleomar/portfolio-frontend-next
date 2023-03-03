import * as Styled from "./styles";
import { GithubOutline } from "@styled-icons/evaicons-outline";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { LinkedinOutline } from "@styled-icons/evaicons-outline";
import { TwitterOutline } from "@styled-icons/evaicons-outline";
import { Star } from "@styled-icons/bootstrap/Star";
import { GitBranch } from "@styled-icons/boxicons-regular/GitBranch";
import { useInView } from "react-intersection-observer";

export type FooterProps = {
  title?: string;
};

export const Footer = ({ title }: FooterProps) => {
  return (
    <Styled.Wrapper>
      <Styled.FooterIcons>
        <div className="animation-fade"></div>
        <ul>
          <li className="animation-top delay4">
            <a href="#">
              <GithubOutline size={22} />
            </a>
          </li>
          <li className="animation-top delay3">
            <a href="#">
              <LinkedinOutline size={22} />
            </a>
          </li>
          <li className="animation-top delay2">
            <a href="#">
              <TwitterOutline size={22} />
            </a>
          </li>
          <li className="animation-top delay1">
            <a href="#">
              <Instagram size={22} />
            </a>
          </li>
        </ul>
      </Styled.FooterIcons>
      <Styled.FooterText className="animation-fade">
        <a href="null">Designed By Brittany Chiang</a>
        <span> & </span>
        <a href="null">Created in Next.js by Eleomar Dorneles</a>
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
          <a href="">eleomar.dev@gmail.com</a>
        </p>
      </Styled.FooterEmail>
    </Styled.Wrapper>
  );
};
