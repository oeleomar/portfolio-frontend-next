import type { GetStaticProps, NextPage } from "next";
import axios from "axios";
import { PortfolioProps } from "../../types/portfolio";

const Home: NextPage<PortfolioProps> = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
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
