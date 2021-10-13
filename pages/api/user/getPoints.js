import axios from 'axios';
// import fetch from 'node-fetch';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();

export default async (req, res) => {
  // fetch(`${process.env.CUSTOM_WP_API_URL}/points/check`, {
  //   method: 'POST',
  //   body: new URLSearchParams({
  //     user_id: req.body.id,
  //   }),
  // }).then(async (resp) => {
  //   res.json(await resp.json());
  // });

  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/points/check`,
    querystring.stringify({
      user_id: req.body.user_id,
    }),
  );

  res.json(data);
};
