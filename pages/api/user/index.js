import axios from 'axios';

require('dotenv').config();

export default async (req, res) => {
  const { data } = await axios.get(`${process.env.WP_API_URL}/users/1`);

  res.json(data);
};
