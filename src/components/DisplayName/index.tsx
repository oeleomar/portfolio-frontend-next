import { Section } from "../Section";
import * as Styled from "./styles";

export type DisplayNameProps = {
  name: string;
  description: string;
};

export const DisplayName = ({ name, description }: DisplayNameProps) => {
  return (
    <Section>
      <Styled.Wrapper>
        <Styled.Span>Olá, meu nome é</Styled.Span>
        <div>
          <Styled.Name>{name}.</Styled.Name>
          <Styled.Subtitle>{description}.</Styled.Subtitle>
        </div>
        <Styled.DescriptionContainer>
          <Styled.Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen.
          </Styled.Description>
        </Styled.DescriptionContainer>
      </Styled.Wrapper>
    </Section>
  );
};
