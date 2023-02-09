import axios from "axios";
import { API_DOMAIN } from "../config";

const axiosClient = axios.create({
  baseURL: API_DOMAIN,
});

export default axiosClient;
