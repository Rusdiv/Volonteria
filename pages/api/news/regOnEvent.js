import axios from 'axios';
import FormData from 'form-data';

const fetch = require('node-fetch');

require('dotenv').config();

export default async (req, res) => {
  const formData = new FormData();
  formData.append('user_id', req.body.user_id);
  formData.append('event_id', req.body.newsId);
  const request = await axios.post(
    `${process.env.CUSTOM_WP_API_URL}/prereg/event/${req.body.newsId}`,
    formData,
    { headers: form.getHeaders() }
  );

//   const request = await axios.post(
//     `${process.env.CUSTOM_WP_API_URL}/prereg/event/${req.body.newsId}`,
//     formData,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data',
//     },
//   );