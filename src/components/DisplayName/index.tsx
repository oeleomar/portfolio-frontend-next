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
  return (
    <Section id="">
      <Styled.Wrapper>
        <Styled.Span>Olá, meu nome é</Styled.Span>
        <div>
          <Styled.Name>{name}.</Styled.Name>
          <Styled.Subtitle>{subtitle}.</Styled.Subtitle>
        </div>
        <Styled.DescriptionContainer>
          <Styled.Description>{description}</Styled.Description>
        </Styled.DescriptionContainer>
        <Styled.ButtonContainer>
          <a href="/static/curriculo.pdf" download>
            <Styled.Button className="button">Baixar CV</Styled.Button>
          </a>
        </Styled.ButtonContainer>
      </Styled.Wrapper>
    </Section>
  );
};
