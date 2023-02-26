import * as Styled from "./styles";

export type AboutProps = {
  title?: string;
};

export const About = ({ title }: AboutProps) => {
  return (
    <Styled.Wrapper>
      <h1>Oi</h1>
      <p>{title}</p>
    </Styled.Wrapper>
  );
};
