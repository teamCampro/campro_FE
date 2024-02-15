'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { GroupCountInputView } from '@/components/index';
import { useEffect } from 'react';
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
  const { control, setValue } = useFormContext(); // setValue 추가

  useEffect(() => {
    setValue(name, groupCount); // URL 파라미터가 변경될 때마다 form 값을 갱신
  }, [groupCount]);

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
