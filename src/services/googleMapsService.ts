const apiKey = import.meta.env.VITE_GOOGLEMAPS_API_KEY;

interface GoogleMapsResponse {
  results: Array<{
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }>;
  status: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

class GoogleMapsService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async fetchCoordinatesByCity(city: string): Promise<Coordinates> {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          city
        )}&key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar as coordenadas");
      }

      const data: GoogleMapsResponse = await response.json();

      if (data.status === "ZERO_RESULTS") {
        throw new Error("Cidade não encontrada");
      }

      return {
        lat: data.results[0].geometry.location.lat,
        lng: data.results[0].geometry.location.lng,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const googleMapsService = new GoogleMapsService(apiKey);
export default googleMapsService;
