import { env } from "process";

export const API_DOMAIN = env.REACT_APP_OPEN_WEATHER_MAP_DOMAIN || 'domain';
export const API_KEY = env.REACT_APP_API_KEY || 'add_a_key';
