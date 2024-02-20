'use client';

import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { LocationInputView } from '@/components/index';

interface Props {
  name: string;
  default?: string;
  onRenderButton?: () => void;
}
const locations = [
  '전체',
  '경기',
  '강원',
  '경남',
  '충남',
  '충북',
  '경북',
  '전남',
  '인천',
  '부산',
  '전북',
  '서울',
  '대구',
  '제주',
  '대전',
  '울산',
  '광주',
  '세종',
];

function LocationController({
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
        <LocationInputView
          field={field}
          locations={locations}
          onRenderButton={onRenderButton}
        />
      )}
    />
  );
}

export default LocationController;
