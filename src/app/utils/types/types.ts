import { CheckboxState } from '../../store/checkbox-slice';

export interface Pokemon {
  name: string;
  url: string;
}

export interface RootState {
  checkbox: CheckboxState;
}

export type DetailsRowCSV = Record<string, string | number | boolean>;
