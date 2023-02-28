import * as Styled from "./styles";

export type SectionProps = {
  children: React.ReactNode;
  small?: boolean;
};

export const Section = ({ children, small = false }: SectionProps) => {
  return <Styled.Wrapper small={small}>{children}</Styled.Wrapper>;
};
