import * as Styled from "./styles";

export type HeadingComponentProps = {
  id: string;
  title: string;
};

export const HeadingComponent = ({ id, title }: HeadingComponentProps) => {
  return <Styled.Heading number={id}>{title}</Styled.Heading>;
};
