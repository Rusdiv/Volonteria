// import axios from 'axios';

const fetch = require('node-fetch');

require('dotenv').config();

export default (req, res) => {
  // const { data } = await axios.post(
  //   `${process.env.CUSTOM_WP_API_URL}/points/check`,
  //   {
  //     user_id: req.body.id,
  //   },
  //   {
  //     auth: {
  //       username: process.env.ADMIN_LOGIN,
  //       password: process.env.ADMIN_PASSWORD,
  //     },
  //   },
  // );
  fetch(`${process.env.CUSTOM_WP_API_URL}/points/check`, {
    method: 'POST',
    body: new URLSearchParams({
      user_id: req.body.id,
    }),
  }).then(async (resp) => {
    res.json(await resp.json());
  });
};
