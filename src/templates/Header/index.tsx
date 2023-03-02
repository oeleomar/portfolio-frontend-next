import { useEffect, useRef, useState } from "react";
import * as Styled from "./styles";
import { Close, Menu } from "@styled-icons/material-outlined";
import Link from "next/link";

export type HeaderProps = {
  setMenuMobile: (a: boolean) => void;
  open: boolean;
};

export const Header = ({ setMenuMobile, open }: HeaderProps) => {
  let progress = useRef(0);
  const [scroll, setScroll] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);

    if (progress.current === window.scrollY) return;

    if (progress.current < window.scrollY) {
      progress.current = window.scrollY;
      setScroll(() => true);
    } else {
      progress.current = window.scrollY;
      setScroll(() => false);
    }
  };

  return (
    <Styled.Wrapper scroll={scroll} progress={scrolledToTop}>
      <Styled.Navbar>
        <div>
          <Styled.Logo>LOGO</Styled.Logo>
        </div>

        <div>
          <Styled.ButtonClose onClick={() => setMenuMobile(!open)}>
            {open ? <Close size={50} /> : <Menu size={50} />}
          </Styled.ButtonClose>
          <Styled.AsideMobile open={open}>
            <ol>
              <li>
                <Link
                  href="#about"
                  onClick={() => setMenuMobile(false)}
                  scroll={false}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={() => setMenuMobile(false)}
                  scroll={false}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  onClick={() => setMenuMobile(false)}
                  scroll={false}
                >
                  Experiências
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={() => setMenuMobile(false)}
                  scroll={false}
                >
                  Contato
                </Link>
              </li>
              <button>
                <a href="/static/curriculo.pdf">Curriculo</a>
              </button>
            </ol>
          </Styled.AsideMobile>
        </div>

        <div>
          <Styled.List>
            <Styled.Link>
              <Link href="#about" scroll={false}>
                Sobre
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link href="#projects" scroll={false}>
                Projetos
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link href="#experience" scroll={false}>
                Experiências
              </Link>
            </Styled.Link>
            <Styled.Link>
              <Link href="#contact" scroll={false}>
                Contato
              </Link>
            </Styled.Link>
            <button>
              <a href="/static/curriculo.pdf">Curriculo</a>
            </button>
          </Styled.List>
        </div>
      </Styled.Navbar>
    </Styled.Wrapper>
  );
};
