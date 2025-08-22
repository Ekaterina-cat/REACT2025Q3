import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';

import { type ChangeEvent, type JSX } from 'react';

interface CheckboxAgreeProps {
  name: Path<FieldValues>;
  error?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => boolean;
  value?: boolean;
  register?: UseFormRegister<FieldValues>;
  setValue?: (name: Path<FieldValues>, value: boolean) => void;
}

//a template element reusable in both forms, each with its own props
export const CheckboxAgree = ({
  name,
  error,
  defaultChecked = false,
  onChange,
  value,
  register,
  setValue,
}: CheckboxAgreeProps): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    if (setValue) setValue(name, isChecked);
    if (onChange) onChange(isChecked);
  };
  return (
    <div>
      <label htmlFor={name}>Terms and Conditions Agreement</label>
      <div className="flex flex-row items-start gap-2">
        <input
          id={name}
          type="checkbox"
          {...(register ? register(name) : {})}
          checked={value}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          className="h-7 w-7"
        />
        <p className="font-courgette">I am agree</p>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};
