import type { JSX } from 'react';

import { CheckboxAgree } from '@components/checkbox-agree/checkbox-agree';
import { CheckboxGender } from '@components/checkbox-gender';
import { FormInput } from '@components/form-input';
import { SelectCountry } from '@components/select-country/select-country';
import { UploadImage } from '@components/upload-image/upload-image';

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
          <label>Gender</label>
          <div className="flex gap-10">
            <CheckboxGender value={'male'} gender={'man'} />
            <CheckboxGender value={'female'} gender={'woman'} />
          </div>
        </div>
        <SelectCountry />
        <UploadImage />
        <CheckboxAgree name={'agree'} />
      </form>
      <button></button>
    </div>
  );
};
