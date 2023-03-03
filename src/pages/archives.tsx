import React from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { PortfolioProps } from "../../types/portfolio";

export default function Archives({ header, footer }: PortfolioProps) {
  return (
    <>
      <h1>Olá arquivos</h1>
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
