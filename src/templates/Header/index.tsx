import { useEffect, useRef, useState } from "react";
import * as Styled from "./styles";
import { Close, Menu } from "@styled-icons/material-outlined";
import Link from "next/link";
import { HeaderProps } from "../../../types/portfolio";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";

export type HeaderTemplatesProps = {
  header: HeaderProps;
  setMenuMobile: (a: boolean) => void;
  open: boolean;
};

export const Header = ({
  setMenuMobile,
  open,
  header,
}: HeaderTemplatesProps) => {
  let progress = useRef(0);
  const [scroll, setScroll] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const { ref, inView, entry } = useInView({ triggerOnce: false });
  const router = useRouter();

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
    <Styled.Wrapper scroll={scroll} progress={scrolledToTop} ref={ref}>
      <Styled.Navbar>
        <div>
          <Styled.Logo className={`${inView ? "animation-fade" : null} delay`}>
            <Link href="/">
              <Image
                src={header.logo.data?.attributes.formats?.thumbnail?.url || ""}
                fill
                sizes="20vw"
                alt="Logo Eleomar Dorneles"
              />
            </Link>
          </Styled.Logo>
        </div>

        <div>
          <Styled.ButtonClose
            onClick={() => setMenuMobile(!open)}
            className={`${inView ? "animation-top" : null} delay`}
            aria-label="Botão de Open e Close menu"
          >
            {open ? <Close size={50} /> : <Menu size={50} />}
          </Styled.ButtonClose>
          <Styled.AsideMobile open={open}>
            <ol>
              {header.links.map((link, index) => (
                <li
                  key={link.id + link.pathname + link.url}
                  className={`${inView ? "animation-top" : null} delay${
                    index + 1
                  }`}
                >
                  <Link
                    href={
                      router.pathname === "/archives"
                        ? "/" + link.url
                        : link.url
                    }
                    onClick={() => setMenuMobile(false)}
                    scroll={false}
                  >
                    {link.pathname}
                  </Link>
                </li>
              ))}
              <button className={`${inView ? "animation-top" : null} delay5`}>
                <Link href="/static/curriculo.pdf" download target="_blank">
                  Curriculo
                </Link>
              </button>
            </ol>
          </Styled.AsideMobile>
        </div>

        <div>
          <Styled.List>
            {header.links.map((link, index) => (
              <Styled.Link
                key={link.id + link.pathname + link.url}
                className={`${inView ? "animation-top" : null} delay${
                  index + 1
                }`}
              >
                <Link
                  href={
                    router.pathname === "/archives" ? "/" + link.url : link.url
                  }
                  scroll={false}
                >
                  {link.pathname}
                </Link>
              </Styled.Link>
            ))}
            <button className={`${inView ? "animation-top" : null} delay5`}>
              <Link href="/static/curriculo.pdf" download target="_blank">
                Curriculo
              </Link>
            </button>
          </Styled.List>
        </div>
      </Styled.Navbar>
    </Styled.Wrapper>
  );
};
