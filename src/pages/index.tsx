import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { PortfolioProps } from "../../types/portfolio";
import { Home } from "../templates/Home";

const Index: NextPage<PortfolioProps> = (props) => {
  return <Home {...props} />;
};

export default Home;

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
