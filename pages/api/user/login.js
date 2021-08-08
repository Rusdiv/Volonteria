import axios from 'axios';

require('dotenv').config();

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

  const response = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/points/check`,
    {
      user_id: data.id,
    },
    {
      auth: {
        username: req.body.login,
        password: req.body.password,
      },
    },
  );

  console.log(response);

  const userData = {
    name: data.name,
    id: data.id,
    email: data.email,
    nick: data.nickname,
    points: response.data,
    avatar: data.avatar_urls[96],
  };

  res.json(userData);
};
