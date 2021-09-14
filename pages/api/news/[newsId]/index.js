import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  const { data } = await axios.get(
    `${process.env.CUSTOM_WP_API_URL}/posts/${req.query.newsId}`,
  );

  res.json(data[0]);
};
