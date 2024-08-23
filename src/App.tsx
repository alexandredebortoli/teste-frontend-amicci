import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherInfo } from "./types/weather.interface";
import { WeatherCard } from "./components/WeatherCard";
import { SkeletonLoader } from "./components/SkeletonLoader";
import { ErrorBoundary, Provider } from "@rollbar/react";
import { rollbarConfig } from "./config/rollbarConfig";
import { ErrorFallback } from "./components/ErrorFallback";

function App() {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  return (
    <>
      <Provider config={rollbarConfig}>
        <ErrorBoundary fallbackUI={ErrorFallback}>
          <Header />
          <WeatherForm setWeather={setWeather} />
          {weather ? <WeatherCard weather={weather} /> : <SkeletonLoader />}
          <Footer />
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default App;
