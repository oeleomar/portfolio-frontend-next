import React from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { PortfolioProps } from "../../types/portfolio";
import { Archives as ArchiveTemplate } from "../templates/Archives";

export default function Archives(props: PortfolioProps) {
  return <ArchiveTemplate {...props} />;
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
