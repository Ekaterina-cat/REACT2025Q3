export type ColumnKey =
  | 'cement_co2'
  | 'cumulative_cement_co2'
  | 'gdp'
  | 'energy_per_capita'
  | 'gas_co2'
  | 'methane'
  | 'methane_per_capita'
  | 'oil_co2'
  | 'temperature_change_from_ghg'
  | 'total_ghg';

export const columnLabels: Record<ColumnKey, string> = {
  cement_co2: 'CO2 от цемента',
  cumulative_cement_co2: 'Накопленный CO2 от цемента',
  gdp: 'ВВП',
  energy_per_capita: 'Энергия на душу населения',
  gas_co2: 'CO2 от газа',
  methane: 'Метан',
  methane_per_capita: 'Метан на душу населения',
  oil_co2: 'CO2 от нефти',
  temperature_change_from_ghg: 'Изменение температуры от парниковых газов',
  total_ghg: 'Общий объем парниковых газов',
};
