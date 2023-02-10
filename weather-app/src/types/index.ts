export type WeekForecast = {
  id: number;
  dayOfTheWeek: string;
  tempMin: number;
  tempMax: number;
};

export type WeatherData = {
  id: number;
	name: string;
	country: string;
	temperature: number;
	tempMin: number;
	tempMax: number;
	windSpeed: number;
	description: string;
	feelsLike: string;
	humidity: string;
  nextFiveDays: WeekForecast[];
};
