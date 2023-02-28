import * as Styled from "./styles";
import { GithubOutline } from "@styled-icons/evaicons-outline";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { LinkedinOutline } from "@styled-icons/evaicons-outline";
import { TwitterOutline } from "@styled-icons/evaicons-outline";

export type FooterProps = {
  title?: string;
};

export const Footer = ({ title }: FooterProps) => {
  return (
    <Styled.Wrapper>
      <Styled.FooterIcons>
        <div></div>
        <ul>
          <li>
            <a href="#">
              <GithubOutline size={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <LinkedinOutline size={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <TwitterOutline size={22} />
            </a>
          </li>
          <li>
            <a href="#">
              <Instagram size={22} />
            </a>
          </li>
        </ul>
      </Styled.FooterIcons>
      <Styled.FooterEmail>
        <div></div>
        <p>
          <a href="">eleomar.dev@gmail.com</a>
        </p>
      </Styled.FooterEmail>
    </Styled.Wrapper>
  );
};
