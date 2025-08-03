export interface Pokemon {
  name: string;
  url: string;
}

export interface CheckboxState {
  checkboxes: {
    [key: string]: boolean;
  };
  selectedCount: number;
}

export interface RootState {
  checkbox: CheckboxState;
}
