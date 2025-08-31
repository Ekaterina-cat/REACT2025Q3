export interface CountryDataItem {
  year: number;
  population?: number | string;
  co2?: number | string;
  cement_co2?: number;
  co2_per_capita?: number | string;
  cumulative_cement_co2?: number;
  gdp?: number;
  energy_per_capita?: number;
  gas_co2?: number;
  methane?: number;
  methane_per_capita?: number;
  oil_co2?: number;
  temperature_change_from_ghg?: number;
  total_ghg?: number;
}

export interface CountryData {
  iso_code: string;
  data: CountryDataItem[];
}
