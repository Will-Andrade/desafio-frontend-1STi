import { AxiosResponse } from "axios";
import { API_KEY } from "../config";
import api from './api';

export const getWeatherData = (cityName: string): Promise<AxiosResponse> => 
  api.get(`weather?q=${cityName}&appid=${API_KEY}`);

export const getWeekWeather = (cityName: string): Promise<AxiosResponse> =>
  api.get(`forecast?q=${cityName}&appid=${API_KEY}`);
