import axios from 'axios';

require('dotenv').config();

export default async (req, res) => {
  const { data } = await axios.post(
    `http://t0toro-wordpress.tw1.ru/wp-json/vl/v1/reg/event/${req.body.newsId}`,
    {
      user_id: req.body.user_id,
      event_id: req.body.newsId,
    },
  );

  res.json(data);
};
