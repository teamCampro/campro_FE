'use client';

import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

interface CommonFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'all';
  defaultValues?: FieldValues;
  reset?: boolean;
}

function CommonForm({
  children,
  onSubmit,
  className,
  mode = 'onBlur',
  defaultValues = {},
  reset,
}: CommonFormProps) {
  const methods = useForm({ mode, defaultValues });

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          methods.handleSubmit(onSubmit)(e);
          if (reset) {
            methods.reset(defaultValues);
          }
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default CommonForm;
