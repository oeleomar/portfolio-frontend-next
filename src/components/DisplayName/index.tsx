import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import * as Styled from "./styles";

export type DisplayNameProps = {
  name: string;
  subtitle: string;
  description: string;
};

export const DisplayName = ({
  name,
  description,
  subtitle,
}: DisplayNameProps) => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  return (
    <Section id="">
      <Styled.Wrapper ref={ref}>
        <Styled.Span className={`${inView ? "animation-bottom" : null} delay`}>
          Olá, meu nome é
        </Styled.Span>
        <div>
          <Styled.Name
            className={`${inView ? "animation-bottom" : null} delay2`}
          >
            {name}.
          </Styled.Name>
          <Styled.Subtitle
            className={`${inView ? "animation-bottom" : null} delay3`}
          >
            {subtitle}.
          </Styled.Subtitle>
        </div>
        <Styled.DescriptionContainer>
          <Styled.Description
            className={`${inView ? "animation-bottom" : null} delay4`}
          >
            {description}
          </Styled.Description>
        </Styled.DescriptionContainer>
        <Styled.ButtonContainer
          className={`${inView ? "animation-bottom" : null} delay5`}
        >
          <Link href="/static/curriculo.pdf" download target="_blank">
            <Styled.Button className="button">Baixar CV</Styled.Button>
          </Link>
        </Styled.ButtonContainer>
      </Styled.Wrapper>
    </Section>
  );
};
