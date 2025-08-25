import type { FormData, FormFieldId } from '@shared/types';
import type { JSX } from 'react';
import type {
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface FormInputProps {
  id: FormFieldId;
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  rules?: RegisterOptions<FormData, FormFieldId>;
  placeholder?: string;
  className?: string;
  register?: UseFormRegister<FormData>;
  error?: FieldError | string;
}

export const FormInput = ({
  id,
  label,
  type,
  placeholder,
  className = '',
  register,
  rules,
  error,
}: FormInputProps): JSX.Element => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...(register ? register(id, rules) : {})}
      />
      {error && (
        <p className="mt-1 text-xs text-red-500">
          {typeof error === 'string' ? error : error.message}
        </p>
      )}
    </div>
  );
};
