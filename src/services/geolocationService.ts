interface GeolocationData {
  latitude: number;
  longitude: number;
}

export class GeolocationService {
  public async fetchCurrentLocation(): Promise<GeolocationData> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocalização não é suportada pelo seu navegador."));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(new Error(`Erro ao obter localização: ${error.message}`));
        }
      );
    });
  }
}

const geolocationService = new GeolocationService();
export default geolocationService;
