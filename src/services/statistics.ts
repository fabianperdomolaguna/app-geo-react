export interface StatsData {
  [sector: string]: {
    "Área Total": string;
    "Uso Principal": string;
    Distribucion: Record<string, number>;
  };
}

// Datos simulados para las estadísticas de los sectores rurales de Repelón
export const mockData: StatsData = {
  "Sector Villa Rosa": {
    "Área Total": "2,500 hectáreas",
    "Uso Principal": "Agrícola",
    Distribucion: {
      "Uso Agrícola": 65,
      "Uso Residencial": 20,
      "Uso Ganadero": 15,
    },
  },
  "Sector Rotinet": {
    "Área Total": "1,800 hectáreas",
    "Uso Principal": "Mixto",
    Distribucion: {
      "Uso Agrícola": 40,
      "Uso Residencial": 35,
      "Uso Ganadero": 25,
    },
  },
  "Sector Las Tablas": {
    "Área Total": "2,200 hectáreas",
    "Uso Principal": "Ganadero",
    Distribucion: {
      "Uso Agrícola": 30,
      "Uso Residencial": 25,
      "Uso Ganadero": 45,
    },
  },
  "Sector Cienaguita": {
    "Área Total": "1,600 hectáreas",
    "Uso Principal": "Agrícola",
    Distribucion: {
      "Uso Agrícola": 55,
      "Uso Residencial": 30,
      "Uso Ganadero": 15,
    },
  },
};
