export interface Pokemon {
  name: string;
  url: string;
}

export interface CheckboxState {
  [key: string]: boolean;
}

export interface RootState {
  checkbox: CheckboxState;
}
