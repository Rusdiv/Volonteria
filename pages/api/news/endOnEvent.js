import axios from 'axios';
import FormData from 'form-data';
import dotenv from 'dotenv';

dotenv.config();

export default async (req, res) => {
  const formData = new FormData();
  formData.append('user_id', req.body.user_id);
  formData.append('event_id', req.body.event_id);

  const { data } = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/end/event/${req.body.newsId}`,
    formData,
    { headers: formData.getHeaders() },
  );

  const pointData = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/add/points`,
    formData,
    { headers: formData.getHeaders() },
  );

  console.log('END_EVENT', data);
  console.log('POINTS', pointData);

  res.json(data, pointData);
};
