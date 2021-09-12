import axios from 'axios';
import FormData from 'form-data';

require('dotenv').config();

export default async (req, res) => {
  const formData = new FormData();
  formData.append('user_id', req.body.user_id);
  formData.append('event_id', req.body.newsId);
  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/prereg/event/${req.body.newsId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  console.log(data);

  res.json(data);
};
