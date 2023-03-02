import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import * as Styled from "./styles";

export type DisplayNameProps = {
  name: string;
  description: string;
};

export const DisplayName = ({ name, description }: DisplayNameProps) => {
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
            {description}.
          </Styled.Subtitle>
        </div>
        <Styled.DescriptionContainer>
          <Styled.Description
            className={`${inView ? "animation-bottom" : null} delay4`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen.
            <a href="#">Um texto Qualquer</a>
          </Styled.Description>
        </Styled.DescriptionContainer>
        <Styled.ButtonContainer
          className={`${inView ? "animation-bottom" : null} delay5`}
        >
          <a href="/static/curriculo.pdf" download>
            <Styled.Button className="button">Baixar CV</Styled.Button>
          </a>
        </Styled.ButtonContainer>
      </Styled.Wrapper>
    </Section>
  );
};
