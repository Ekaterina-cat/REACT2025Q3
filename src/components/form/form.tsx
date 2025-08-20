import type { JSX } from 'react';

import { CheckboxGender } from '@components/checkbox-gender';
import { FormInput } from '@components/form-input';

import { formFields } from './form.type';
export const Form = (): JSX.Element => {
  return (
    <div className="rounded-lg border border-gray-300 p-6">
      <form className="space-y-4">
        {formFields.map((field) => (
          <FormInput
            key={field.id}
            id={field.id}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
          />
        ))}
        <div>
          <label
            htmlFor=""
            className="font-borel text-lg font-black text-gray-900"
          >
            Gender
          </label>
          <div className="flex gap-10">
            <CheckboxGender value={'male'} gender={'man'} />
            <CheckboxGender value={'female'} gender={'woman'} />
          </div>
        </div>
      </form>
      <button></button>
    </div>
  );
};
