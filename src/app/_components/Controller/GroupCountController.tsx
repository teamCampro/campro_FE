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
  onRenderButton?: () => void;
}

function GroupCountController({ name, groupCount, onRenderButton }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={groupCount}
      name={name}
      render={({ field }) => (
        <GroupCountInputView field={field} onRenderButton={onRenderButton} />
      )}
    />
  );
}

export default GroupCountController;
