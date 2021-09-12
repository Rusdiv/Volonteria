import axios from 'axios';

require('dotenv').config();

export default async (req, res) => {
  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/prereg/event/${req.body.newsId}`,
    {
      user_id: req.body.user_id,
      event_id: req.body.newsId,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  console.log(data);

  res.json(data);
};
