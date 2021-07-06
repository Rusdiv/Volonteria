require("dotenv").config();
import axios from "axios";

export default async (req, res) => {
  const response = await axios.get(`${process.env.WP_API_URL}/users/1`).then((response) => {
    return response.data;
  });
  res.statusCode = 200;
  res.json(response);
};
