'use client';

import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SubmitHandler, FieldValues } from 'react-hook-form';

interface CommonFormProps {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
  mode?: 'onChange' | 'onBlur' | 'onSubmit';
  defaultValues?: FieldValues;
}

function CommonForm({
  children,
  onSubmit,
  className,
  mode = 'onBlur',
  defaultValues = {},
}: CommonFormProps) {
  const methods = useForm({ mode, defaultValues });

  // const sasdawdas = (data: FieldValues, e: SubmitEvent) => {
  //   e.stopPropagation();
  //   onSubmit(data);
  // };
  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          methods.handleSubmit(onSubmit)(e);
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default CommonForm;
