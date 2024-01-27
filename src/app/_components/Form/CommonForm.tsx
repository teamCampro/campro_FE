'use client';

import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface CommonFormProps {
  children: ReactNode;
  onSubmit: () => void;
  className: string;
}

function CommonForm({ children, onSubmit, className }: CommonFormProps) {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <form className={className} onSubmit={method.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

export default CommonForm;
