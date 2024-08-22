import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherInfo } from "./types/weather.interface";

function App() {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  return (
    <>
      <Header />
      <WeatherForm setWeather={setWeather} />
      <Footer />
    </>
  );
}

export default App;
