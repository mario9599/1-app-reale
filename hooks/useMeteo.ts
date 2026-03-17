import { useEffect, useState } from "react";
import { getMeteo } from "../services/meteo";
import { Meteo } from "../types";

export const useMeteo = (cittaIniziale: string) => {
  const [meteo, setMeteo] = useState<Meteo | null>(null);
  const [loading, setLoading] = useState(true);
  const [errore, setErrore] = useState<string | null>(null);

  const cercaMeteo = async (citta: string) => {
    try {
      setLoading(true);
      setErrore(null);
      const data = await getMeteo(citta);
      setMeteo(data);
    } catch (err) {
      setErrore(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cercaMeteo(cittaIniziale);
  }, []);

  return { meteo, loading, errore, cercaMeteo };
};
