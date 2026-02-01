import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Example schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Example usage hook
export function useLoginForm() {
  return useReactHookForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
}

// Generic form hook factory
export function createFormHook<T extends z.ZodType>(schema: T) {
  type FormData = z.infer<T>;

  return (defaultValues?: Partial<FormData>) => {
    return useReactHookForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: defaultValues as FormData,
    });
  };
}

/*
 * Usage example:
 *
 * const userSchema = z.object({
 *   name: z.string().min(1),
 *   age: z.number().min(18),
 * });
 *
 * const useUserForm = createFormHook(userSchema);
 *
 * function MyComponent() {
 *   const { register, handleSubmit, formState: { errors } } = useUserForm();
 *
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register('name')} />
 *       {errors.name && <span>{errors.name.message}</span>}
 *     </form>
 *   );
 * }
 */
