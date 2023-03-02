import { useEffect, useState } from "react";
import * as Styled from "./styles";
import { Close, Menu } from "@styled-icons/material-outlined";

export type HeaderProps = {
  setMenuMobile: (a: boolean) => void;
  open: boolean;
};

export const Header = ({ setMenuMobile, open }: HeaderProps) => {
  const [progress, setProgress] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [ticking, setTicking] = useState(false);

  return (
    <Styled.Wrapper scroll={scroll} progress={false}>
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
              <li>Sobre</li>
              <li>Projetos</li>
              <li>Experiências</li>
              <li>Contato</li>
              <button>
                <a href="/static/curriculo.pdf">Curriculo</a>
              </button>
            </ol>
          </Styled.AsideMobile>
        </div>

        <div>
          <Styled.List>
            <Styled.Link>Sobre</Styled.Link>
            <Styled.Link>Projetos</Styled.Link>
            <Styled.Link>Experiências</Styled.Link>
            <Styled.Link>Contato</Styled.Link>
            <button>
              <a href="/static/curriculo.pdf">Curriculo</a>
            </button>
          </Styled.List>
        </div>
      </Styled.Navbar>
    </Styled.Wrapper>
  );
};
