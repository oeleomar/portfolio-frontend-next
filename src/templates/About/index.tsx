import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { AboutProps } from "../../../types/portfolio";
import { HeadingComponent } from "../../components/HeadingComponent";
import { Section } from "../../components/Section";
import * as Styled from "./styles";

export const About = ({ title, cover, description }: AboutProps) => {
  const { ref, inView, entry } = useInView();

  return (
    <Section small id="about">
      <HeadingComponent
        id="1"
        title={title}
        className={`${inView ? "animation-bottom" : ""} delay`}
      />
      <Styled.Container ref={ref}>
        <Styled.TextContainer>
          {description.map((desc) => (
            <p key={`About-Descriptio-${desc.id}`}>{desc.description}</p>
          ))}

          <Styled.TechnologiesContainer>
            <Styled.Technologies>Tecnologia 1</Styled.Technologies>
            <Styled.Technologies>Tecnologia 1</Styled.Technologies>
            <Styled.Technologies>Tecnologia 1</Styled.Technologies>
            <Styled.Technologies>Tecnologia 1</Styled.Technologies>
            <Styled.Technologies>Tecnologia 1</Styled.Technologies>
            <Styled.Technologies>Tecnologia 1</Styled.Technologies>
          </Styled.TechnologiesContainer>
        </Styled.TextContainer>
        <Styled.PictureContainer>
          <div>
            <Image
              width={300}
              height={300}
              src={cover?.data?.attributes.url || ""}
              alt="Foto do Desenvolvedor Eleomar Dorneles"
            />
          </div>
        </Styled.PictureContainer>
      </Styled.Container>
    </Section>
  );
};
