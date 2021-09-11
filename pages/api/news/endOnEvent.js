import axios from 'axios';

require('dotenv').config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/end/event/${req.body.newsId}`,
    {
      users_id: req.body.user_id,
      event_id: req.body.newsId,
    },
  );

  res.json(data);
};
