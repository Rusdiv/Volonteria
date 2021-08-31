// import axios from 'axios';

const fetch = require('node-fetch');

require('dotenv').config();

export default (req, res) => {
  fetch(`${process.env.CUSTOM_WP_API_URL}/history`, {
    method: 'POST',
    body: new URLSearchParams({
      user_id: req.body.id,
    }),
  }).then(async (resp) => {
    res.json(await resp.json());
  });
};
