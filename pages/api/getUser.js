// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const WP_API_URL = "http://t0toro-wordpress.tw1.ru/wp-json/wp/v2";

export default async (req, res) => {
  const response = await axios.get(`${WP_API_URL}/users/1`).then((response) => {
    return response.data;
  });
  res.statusCode = 200;
  res.json(response);
};
