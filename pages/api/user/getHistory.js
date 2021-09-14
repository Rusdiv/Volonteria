// import axios from 'axios';

import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

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
