import * as Styled from "./styles";
import TagCloud from "TagCloud";
import { useEffect, useRef, useState } from "react";
import { texts } from "../../config/tagCloud";
import { TypeAnimation } from "react-type-animation";
import { LinksProps } from "../../../types/portfolio";

export type DisplayNameProps = {
  name: string;
  description: string;
  links: LinksProps[];
};

export const DisplayName = ({ name, description, links }: DisplayNameProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    TagCloud(".Sphere", texts, {
      radius: 480,
      useContainerInlineStyles: false,
    });
  }, []);

  return (
    <>
      <Styled.Wrapper>
        <span className="Sphere" ref={ref} />

        <Styled.TypeContainer>
          <TypeAnimation
            className="typeAnimation"
            sequence={[
              `< ${name} / >`,
              2000,
              `< ${description} / >`,
              2000,
              "< É um prazer, bem vindos :) ! / >",
              2000,
              () => {
                //
              },
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ maxWidth: "640rem" }}
          />
        </Styled.TypeContainer>

        <Styled.ButtonContainer>
          {links.map((link) => (
            <Styled.Link
              href={link.url}
              key={`${link.id} - ${link.pathname}`}
              target="_blank"
            >
              {link.pathname}
            </Styled.Link>
          ))}
        </Styled.ButtonContainer>
      </Styled.Wrapper>
    </>
  );
};
