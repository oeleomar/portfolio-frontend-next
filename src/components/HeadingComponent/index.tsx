import * as Styled from "./styles";

export type HeadingComponentProps = {
  id: string;
  title: string;
  className: string;
};

export const HeadingComponent = ({
  id,
  title,
  className,
}: HeadingComponentProps) => {
  return (
    <Styled.Heading number={id} className={className}>
      {title}
    </Styled.Heading>
  );
};
