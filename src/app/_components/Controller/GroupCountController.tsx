'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { GroupCountInputView } from '@/components/index';

interface GroupCount {
  adult: number;
  child: number;
  pet: number;
}

interface Props {
  name: string;
  groupCount: GroupCount;
}

function GroupCountController({ name, groupCount }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={groupCount}
      name={name}
      render={({ field }) => <GroupCountInputView field={field} />}
    />
  );
}

export default GroupCountController;
