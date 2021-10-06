import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/end/event/${req.body.newsId}`,
    {
      user_id: req.body.user_id,
      event_id: req.body.newsId,
    },
  );

  const pointData = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/add/points`,
    {
      user_id: req.body.user_id,
    },
  );

  res.json({
    data,
    user_id: req.body.user_id,
    event_id: req.body.newsId,
    pointData,
  });
};
