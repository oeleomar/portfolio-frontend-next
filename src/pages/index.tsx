import axios from "axios";
import type { GetStaticProps, NextPage } from "next";

import { PortfolioProps } from "../../types/portfolio";
import { Home } from "../templates/Home";

const Index: NextPage<PortfolioProps> = (props) => {
  return <Home {...props} />;
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log(process.env.BACKEND_URL);
  try {
    const response = await axios(process.env.BACKEND_URL || "");
    const { data } = response;

    return {
      props: { ...data.data.attributes },
      revalidate: 24 * 60 * 60,
    };
  } catch (err) {
    return {
      props: {},
      notFound: true,
    };
  }
};
