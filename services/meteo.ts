import { Meteo } from "../types";

const API_KEY = "04debe35aedc28b7979ed43f0008e627";

export const getMeteo = async (citta: string): Promise<Meteo> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=${API_KEY}&units=metric`,
  );
  if (!response.ok) throw new ERROR("città non trovata");

  const data = await response.json();
  return data;
};
