require("dotenv").config();
import axios from "axios";

export default async (req, res) => {
  const { data } = await axios.get(`${process.env.CUSTOM_WP_API_URL}/achives`);
  res.json(data);
};
