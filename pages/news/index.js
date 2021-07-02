import React from "react";
import axios from "axios";

import News from "../../components/News/News";

export default function NewsPage(props) {
  return <News newsData={props.data} />;
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const { data } = await axios.get(`http://${req.headers.host}/api/getNews`);

  return {
    props: { data },
  };
};
