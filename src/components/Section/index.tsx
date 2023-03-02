import * as Styled from "./styles";

export type SectionProps = {
  children: React.ReactNode;
  small?: boolean;
  id: string;
};

export const Section = ({ children, small = false, id }: SectionProps) => {
  return (
    <Styled.Wrapper small={small} id={id}>
      {children}
    </Styled.Wrapper>
  );
};
