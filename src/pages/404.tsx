import React, { useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { Header } from "../templates/Header";
import { Footer } from "../templates/Footer";
import { PortfolioProps } from "../../types/portfolio";
import Link from "next/link";
import Lottie from "lottie-react";
import page404 from "../lotties/page404.json";

export default function Custom404({ header, footer }: PortfolioProps) {
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <>
      <Header header={header} open={menuMobile} setMenuMobile={setMenuMobile} />
      <Lottie
        animationData={page404}
        autoPlay
        loop
        style={{ maxWidth: "60rem", margin: "10rem auto 0 auto" }}
        className="animation-bottom delay1"
      />
      <h2
        style={{ textAlign: "center", fontSize: "33px" }}
        className="animation-bottom delay2"
      >
        Página não encontrada
      </h2>
      <button
        style={{ display: "block", margin: "2rem auto" }}
        className="animation-bottom delay3"
      >
        <Link href="/">Voltar para a Home</Link>
      </button>
      <Footer footer={footer} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const response = await axios(process.env.BACKEND_URL || "");
    const { data } = response;

    return {
      props: { ...data.data.attributes },
      revalidate: 60 * 60,
    };
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
};
