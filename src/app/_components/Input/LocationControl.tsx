import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import LocationInput from './LocationInput';

interface Props {
  name?: string;
}
const locations = [
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
  '제주',
  '대전',
  '울산',
  '광주',
  '세종',
];

function LocationControl({ name = 'location' }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <LocationInput field={field} locations={locations} />
      )}
    />
  );
}

export default LocationControl;
