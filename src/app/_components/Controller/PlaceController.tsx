'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import PlaceInputView from '../Input/PlaceInputView';

interface Props {
  name: string;
  default?: string;
  onRenderButton?: () => void;
}

function PlaceController({
  name,
  default: defaultValue,
  onRenderButton,
}: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue ? defaultValue : ''}
      render={({ field }) => (
        <PlaceInputView field={field} onRenderButton={onRenderButton} />
      )}
    />
  );
}

export default PlaceController;
