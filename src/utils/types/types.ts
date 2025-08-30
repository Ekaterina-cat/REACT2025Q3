export interface CountryDataItem {
  year: number;
  population?: number | string;
  co2?: number | string;
  co2_per_capita?: number | string;
}

export interface CountryData {
  iso_code: string;
  data: CountryDataItem[];
}
