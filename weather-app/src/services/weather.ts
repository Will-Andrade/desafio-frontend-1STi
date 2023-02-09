import { AxiosResponse } from "axios";
import { API_KEY } from "../config";
import api from './api';

const getWeatherData = (cityName: string): Promise<AxiosResponse> => 
  api.get(`?q=${cityName}&appid=${API_KEY}`);

export default getWeatherData;
