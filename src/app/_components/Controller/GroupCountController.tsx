'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { GroupCountInputView } from '@/components/index';

const family = {
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
      name={name}
      render={({ field }) => (
        <GroupCountInputView field={field} group={family} />
      )}
    />
  );
}

export default GroupCountController;
