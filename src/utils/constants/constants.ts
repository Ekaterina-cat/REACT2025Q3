import type { ColumnKey } from '@components/modal-widget/types';

export const API_BASE =
  'https://nyc3.digitaloceanspaces.com/owid-public/data/co2';

export const initialColumnsVisibility: Record<ColumnKey, boolean> = {
  cement_co2: false,
  cumulative_cement_co2: false,
  gdp: false,
  energy_per_capita: false,
  gas_co2: false,
  methane: false,
  methane_per_capita: false,
  oil_co2: false,
  temperature_change_from_ghg: false,
  total_ghg: false,
};

export const nameColunms = {
  serial_number: '№',
  name_country: 'Country',
  iso_code: 'ISO code',
  population: 'Population',
  cement_co2: 'CO2 from cement',
  cumulative_cement_co2: 'Accumulated CO2 from cement',
  gdp: 'GDP',
  energy_per_capita: 'Energy per capita',
  gas_co2: 'CO2 from gas',
  methane: 'Methane',
  methane_per_capita: 'Methane per capita',
  oil_co2: 'CO2 from oil',
  temperature_change_from_ghg: 'Temperature change from greenhouse gases',
  total_ghg: 'Total greenhouse gases',
};
