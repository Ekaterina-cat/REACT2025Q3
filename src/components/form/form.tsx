import { CheckboxAgree } from '@components/checkbox-agree/checkbox-agree';
import { CheckboxGender } from '@components/checkbox-gender';
import { FormInput } from '@components/form-input';
import { SelectCountry } from '@components/select-country/select-country';
import { UploadImage } from '@components/upload-image/upload-image';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegistrationSchema } from '@shared/validation';
import { useEffect, type JSX } from 'react';
import { useForm } from 'react-hook-form';

export const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(RegistrationSchema),
    mode: 'onChange',
  });

  const formValues = watch();

  useEffect(() => {
    console.log('Form state updated:', {
      errors,
      isValid,
      values: formValues,
    });
  }, [formValues, errors, isValid]);

  const onSubmit = (data: unknown) => {
    console.log('Form submitted:', data);
  };

  console.log('Initial form state:', { errors, isValid });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        id="name"
        label="First name"
        type="text"
        placeholder="Enter your first name..."
        register={register}
        rules={{ required: 'First name is required' }}
        error={errors.name?.message}
        {...register('name')}
      />
      <FormInput
        id="age"
        label="Age"
        type="number"
        placeholder="Enter your age..."
        {...register('age', { valueAsNumber: true })}
        error={errors.age?.message}
      />
      <FormInput
        id="email"
        label="E-mail"
        type="email"
        placeholder="Your email address..."
        register={register}
        error={errors.email?.message}
      />
      <FormInput
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password..."
        register={register}
        error={errors.password?.message}
      />
      <FormInput
        id="confirmPassword"
        label="Confirm password"
        type="password"
        placeholder="Confirm password..."
        register={register}
        error={errors.confirmPassword?.message}
      />
      <div>
        <label>Gender</label>
        <div className="flex gap-4">
          <CheckboxGender value="male" gender="Man" {...register('gender')} />
          <CheckboxGender
            value="female"
            gender="Woman"
            {...register('gender')}
          />
        </div>
        {errors.gender && (
          <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>
        )}
      </div>
      <SelectCountry
        register={register}
        setValue={setValue}
        error={errors.country?.message}
      />
      <UploadImage
        onChange={(file) => setValue('avatar', file, { shouldValidate: true })}
        error={errors.avatar?.message}
      />
      <CheckboxAgree
        name="terms"
        register={register}
        error={errors.terms?.message}
      />
      <button
        type="submit"
        className={`rounded px-4 py-2 text-white ${isValid ? 'bg-blue-500 hover:bg-blue-600' : 'cursor-not-allowed bg-gray-400'} `}
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
};
