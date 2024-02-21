'use client';

import Delete from '@/public/svgs/deleteVehicle.svg';
import { IconPlusNon } from '@/public/svgs';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { addVehicle, deleteVehicle } from '@/src/app/_slices/vehicleNumber';
import { CommonForm, CommonInput, ErrorMessage } from '@/components/index';
import { FieldValues } from 'react-hook-form';
import { vehicleNumberValidate } from '@/src/app/_constants/inputValidate';
import HookFormButton from '@/components/Button/HookFormButton';

function AddVehicle() {
  const dispatch = useAppDispatch();
  const vehicleInfos = useAppSelector((state) => state.vehicleNumber);

  const handleAdd = (info: string) => {
    dispatch(addVehicle(info));
  };

  const handleDelete = (info: string) => {
    dispatch(deleteVehicle(info));
  };

  const onSubmit = (data: FieldValues) => {
    handleAdd(data.carNumber);
  };

  return (
    <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
      <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
        차량 추가
      </h3>

      {vehicleInfos &&
        vehicleInfos.map((vehicleNumber, index) => (
          <div
            key={index}
            className='flex items-center justify-start gap-24pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'
          >
            차량번호
            <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
              {vehicleNumber}
            </span>
            <button
              onClick={() => handleDelete(vehicleNumber)}
              className='flex w-49pxr items-center gap-4pxr'
            >
              <Delete />
              <p className='text-gray500 font-caption1-semibold'>삭제</p>
            </button>
          </div>
        ))}
      <CommonForm
        reset
        onSubmit={onSubmit}
        className='flex w-full  gap-12pxr'
        mode='onBlur'
        defaultValues={{ carNumber: '' }}
      >
        <div className='flex w-full max-w-334pxr flex-col gap-2pxr'>
          <CommonInput
            name='carNumber'
            placeholder='차량 번호를 입력해주세요'
            className='h-56pxr w-full max-w-334pxr rounded-lg border-none bg-gray100 p-16pxr '
            rules={vehicleNumberValidate}
          />

          <ErrorMessage name='carNumber' custom='mt-4pxr' />
        </div>
        <HookFormButton custom='!flex-center !w-108pxr !h-56pxr gap-4pxr !rounded-[99px] border border-gray300 disabled:pointer-events-none py-24pxr pl-24pxr pr-32pxr font-body2-medium'>
          <div className='flex-center  w-20pxr'>
            <IconPlusNon
              fill='#949494'
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
            />
          </div>
          <span className='flex-center whitespace-nowrap leading-none font-body2-medium'>
            등록
          </span>
        </HookFormButton>
      </CommonForm>
    </div>
  );
}

export default AddVehicle;
