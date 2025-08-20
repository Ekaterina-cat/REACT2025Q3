interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder: string;
}
export const formFields: FormField[] = [
  {
    id: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'Your email address...',
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
  },
  {
    id: 'password-repeat',
    label: 'Confirm password',
    type: 'password',
    placeholder: 'Confirm password...',
  },
  {
    id: 'firstName',
    label: 'First name',
    type: 'text',
    placeholder: 'Enter your first name...',
  },

  {
    id: 'surname',
    label: 'Surname',
    type: 'text',
    placeholder: 'Enter your surname...',
  },
  { id: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age...' },
];
