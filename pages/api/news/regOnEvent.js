import axios from 'axios';
import FormData from 'form-data';

require('dotenv').config();

export default async (req, res) => {
  const formData = new FormData();
  formData.append('user_id', req.body.user_id);
  formData.append('event_id', req.body.newsId);
  const request = await axios({
    url: `${process.env.CUSTOM_WP_API_URL}/prereg/event/${req.body.newsId}`,
    method: 'POST',
    data: formData,
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  });
  // const request = await axios.post(
  //   `${process.env.CUSTOM_WP_API_URL}/prereg/event/${req.body.newsId}`,
  //   formData,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'multipart/form-data',
  //   },
  // );

  console.log(formData, request);

  res.json(1);
};
