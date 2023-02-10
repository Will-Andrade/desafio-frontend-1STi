import { FormEvent, useRef, useState } from "react";
import { WeatherData } from "../../types";
import { getWeatherData, getWeekWeather } from '../../services/weather';

interface FormBoxProps {
  getCityWeather: (weatherObj: WeatherData) => void;
}

export default function FormBox({ getCityWeather }: FormBoxProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log('sent', inputRef.current!.value);

    try {
      if (inputRef.current!.value.trim() === '') throw new Error('Error!');

      const forecastRes = await getWeekWeather(inputRef.current!.value);
      const weatherRes = await getWeatherData(inputRef.current!.value);

      console.log(forecastRes);
        
      getCityWeather({
        id: weatherRes.data.id,
        name: weatherRes.data.name,
        country: weatherRes.data.sys.country,
        temperature: weatherRes.data.main.temp,
        tempMin: weatherRes.data.main.temp_min,
        tempMax: weatherRes.data.main.temp_max,
        windSpeed: weatherRes.data.wind.speed,
        description: weatherRes.data.weather[0].description,
        feelsLike: weatherRes.data.main.feels_like,
        humidity: weatherRes.data.main.humidity,
        nextFiveDays: []
      })
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <form data-testid="form-box" onSubmit={onSubmitHandler}>
      <input 
        ref={inputRef}
        type="text" 
        name="cityName"
        id="" 
        placeholder="Insira aqui o nome da cidade"
      />
    </form>
  );
};