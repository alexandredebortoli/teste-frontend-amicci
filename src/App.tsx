import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherInfo } from "./types/weather.interface";
import { WeatherCard } from "./components/WeatherCard";
import { SkeletonLoader } from "./components/SkeletonLoader";

function App() {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  return (
    <>
      <Header />
      <WeatherForm setWeather={setWeather} />
      {weather ? <WeatherCard weather={weather} /> : <SkeletonLoader />}
      <Footer />
    </>
  );
}

export default App;
