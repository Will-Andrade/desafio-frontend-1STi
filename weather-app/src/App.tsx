import FormBox from "./components/FormBox/FormBox.component";
import { WeatherData } from "./types";

function App(): JSX.Element {
  const getCityWeather = (weatherObj: WeatherData) => {
    console.log(weatherObj);
  }

  return <div data-testid="app-container">
    <h1>Previsão do Tempo</h1>
    <FormBox getCityWeather={getCityWeather} />
  </div>
}

export default App;
