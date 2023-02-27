import * as Styled from "./styles";

export type SectionProps = {
  children: React.ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
