import axios from 'axios';

require('dotenv').config();

export default async (req, res) => {
  const { data } = await axios.get(`${process.env.CUSTOM_WP_API_URL}/achives`);
  res.json(data);
};
