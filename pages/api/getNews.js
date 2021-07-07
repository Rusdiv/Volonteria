require("dotenv").config();
import axios from "axios";

export default async (req, res) => {
  const { data } = await axios.get(`${process.env.WP_API_URL}/posts`);
  res.json(data);
};
