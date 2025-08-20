import type { JSX } from 'react';

interface CheckboxGenderProps {
  value: string;
  gender: string;
}

export const CheckboxGender = ({
  value,
  gender,
}: CheckboxGenderProps): JSX.Element => {
  return (
    <div>
      <label>
        <div>
          <label className="font-borel text-lg font-black text-gray-900">
            <input
              type="radio"
              name="gender"
              value={value}
              className="h-4 w-4"
            />
            {gender}
          </label>
        </div>
      </label>
    </div>
  );
};
