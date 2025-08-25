import type { RegistrationFormValues } from '@shared/validation';
import type { UseFormRegister, UseFormSetValue } from 'react-hook-form';

export interface Country {
  code: string;
  name: string;
}

export interface RootState {
  countries: {
    list: Country[];
  };
}

export interface SelectCountryProps {
  // Для React Hook Form
  register?: UseFormRegister<RegistrationFormValues>;
  setValue?: UseFormSetValue<RegistrationFormValues>;
  // Для неконтролируемой формы
  onChange?: (value: string) => void;
  value?: string;
  error?: string;
}
