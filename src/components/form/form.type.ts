// import type { RegisterOptions } from 'react-hook-form';

// interface FormField {
//   id: string;
//   name: string;
//   label: string;
//   type: 'text' | 'number' | 'email' | 'password';
//   placeholder: string;
//   rules?: RegisterOptions; // Добавляем правила валидации
// }

// export const formFields: FormField[] = [
//   {
//     id: 'email',
//     name: 'email',
//     label: 'E-mail',
//     type: 'email',
//     placeholder: 'Your email address...',
//     rules: {
//       required: 'Email is required',
//       pattern: {
//         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//         message: 'Please enter a valid email address',
//       },
//     },
//   },
//   {
//     id: 'password',
//     name: 'password',
//     label: 'Password',
//     type: 'password',
//     placeholder: 'Enter your password...',
//     rules: {
//       required: 'Password is required',
//       minLength: {
//         value: 8,
//         message: 'Password must be at least 8 characters long',
//       },
//       pattern: {
//         value:
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
//         message:
//           'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
//       },
//     },
//   },
//   {
//     id: 'password-repeat',
//     name: 'confirmPassword',
//     label: 'Confirm password',
//     type: 'password',
//     placeholder: 'Confirm password...',
//     rules: {
//       required: 'Please confirm your password',
//     },
//   },
//   {
//     id: 'firstName',
//     name: 'name',
//     label: 'First name',
//     type: 'text',
//     placeholder: 'Enter your first name...',
//     rules: {
//       required: 'First name is required',
//       minLength: {
//         value: 2,
//         message: 'Name must be at least 2 characters long',
//       },
//       pattern: {
//         value: /^[A-Z][a-zA-Z]*$/,
//         message: 'Name must start with a capital letter',
//       },
//     },
//   },
//   {
//     id: 'surname',
//     name: 'surname',
//     label: 'Surname',
//     type: 'text',
//     placeholder: 'Enter your surname...',
//     rules: {
//       required: 'Surname is required',
//       minLength: {
//         value: 2,
//         message: 'Surname must be at least 2 characters long',
//       },
//       pattern: {
//         value: /^[A-Z][a-zA-Z]*$/,
//         message: 'Surname must start with a capital letter',
//       },
//     },
//   },
//   {
//     id: 'age',
//     name: 'age',
//     label: 'Age',
//     type: 'number',
//     placeholder: 'Enter your age...',
//     rules: {
//       required: 'Age is required',
//       min: {
//         value: 0,
//         message: 'Age cannot be negative',
//       },
//       valueAsNumber: true,
//     },
//   },
// ];
