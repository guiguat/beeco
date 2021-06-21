import axios from 'axios'
import { ip } from '../../../../services/api';
export default async function handler(req, res) {
  try {
    const {id, stars} = req.query
    const {data} = await axios.patch(
      `http://${ip}:8080/users/rating/${id}?stars=${stars}`,
    );
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).end(error.message);
  }
}
