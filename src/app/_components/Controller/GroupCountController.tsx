'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { GroupCountInputView } from '@/components/index';

const groupCount = {
  adult: 0,
  child: 0,
  pet: 0,
};

interface Props {
  name: string;
}

function GroupCountController({ name }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={{
        adult: 0,
        child: 0,
        pet: 0,
      }}
      name={name}
      render={({ field }) => <GroupCountInputView field={field} />}
    />
  );
}

export default GroupCountController;
