export interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  terms: boolean;
  country: string;
  avatar?: File | undefined;
}

export type FormFieldId =
  | 'email'
  | 'password'
  | 'avatar'
  | 'name'
  | 'age'
  | 'confirmPassword'
  | 'gender'
  | 'terms'
  | 'country';
