import { z } from 'zod';

export const errorMessages = {
  name: {
    minLength: 'Name must be at least 2 characters long',
    format: 'Name must start with a capital letter',
  },
  age: {
    invalid: 'Age must be a number',
    min: 'Age cannot be negative',
  },
  email: {
    format: 'Please enter a valid email address',
  },
  password: {
    minLength: 'Password must be at least 8 characters long',
    uppercase: 'Password must contain at least one uppercase letter',
    lowercase: 'Password must contain at least one lowercase letter',
    number: 'Password must contain at least one number',
    special: 'Password must contain at least one special character',
    match: 'Passwords do not match',
  },
  gender: {
    required: 'Please select your gender',
  },
  terms: {
    required: 'You must agree to the terms and conditions',
  },
  image: {
    format: 'Only PNG and JPEG formats are supported',
    size: 'File size should not exceed 5MB',
  },
  country: {
    required: 'Please select a country',
  },
};

export const RegistrationSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: errorMessages.name.minLength })
      .regex(/^[A-Z][a-zA-Z]*$/, { message: errorMessages.name.format }),
    age: z
      .number({ message: errorMessages.age.invalid })
      .min(0, { message: errorMessages.age.min }),
    email: z.string().email({ message: errorMessages.email.format }),
    password: z
      .string()
      .min(8, { message: errorMessages.password.minLength })
      .regex(/[A-Z]/, { message: errorMessages.password.uppercase })
      .regex(/[a-z]/, { message: errorMessages.password.lowercase })
      .regex(/[0-9]/, { message: errorMessages.password.number })
      .regex(/[^A-Za-z0-9]/, { message: errorMessages.password.special }),
    confirmPassword: z.string(),
    gender: z
      .string()
      .refine((value) => value === 'male' || value === 'female', {
        message: errorMessages.gender.required,
      }),
    terms: z.boolean().refine((val) => val === true, {
      message: errorMessages.terms.required,
    }),
    avatar: z
      .instanceof(File)
      .refine((file) => ['image/png', 'image/jpeg'].includes(file.type), {
        message: errorMessages.image.format,
      })
      .refine((file) => file.size <= 5 * 1024 * 1024, {
        message: errorMessages.image.size,
      })
      .optional(),
    country: z.string().min(1, { message: errorMessages.country.required }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: errorMessages.password.match,
    path: ['confirmPassword'],
  });

export type RegistrationFormValues = z.infer<typeof RegistrationSchema>;
