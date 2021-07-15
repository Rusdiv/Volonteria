import axios from 'axios';

require('dotenv').config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.WP_API_URL}/users/1`,
    {
      name: req.body.name,
    },
    {
      auth: {
        username: process.env.ADMIN_LOGIN,
        password: process.env.ADMIN_PASSWORD,
      },
    },
  );

  res.json(data);
};
