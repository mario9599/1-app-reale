// Tipo per un task
export type Task = {
  id: number;
  titolo: string;
  completato: boolean;
  priorità: "alta" | "media" | "bassa";
};

// Tipo per un utente
export type Utente = {
  id: number;
  nome: string;
  email: string;
  cercaLavoro: boolean;
};

// Tipo per il meteo
export type Meteo = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
};
