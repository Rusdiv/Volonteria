import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.WP_API_URL}/users/me`,
    {},
    {
      auth: {
        username: req.body.login,
        password: req.body.password,
      },
    },
  );

  const userData = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/points/check`,
    querystring.stringify({
      user_id: data.id,
    }),
  );

  res.json({ data, userData: userData.data });
};
