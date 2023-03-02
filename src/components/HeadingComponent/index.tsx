import * as Styled from "./styles";

export type HeadingComponentProps = {
  id: string;
  title: string;
  className?: string;
  ref?: (node?: Element | null | undefined) => void;
};

export const HeadingComponent = ({
  id,
  title,
  className,
  ref,
}: HeadingComponentProps) => {
  return (
    <Styled.Heading number={id} className={className} ref={ref}>
      {title}
    </Styled.Heading>
  );
};
