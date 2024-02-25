'use client';

import { useEffect, useState } from 'react';
import { IconArrowDown, IconArrowRightNon, IconArrowUp } from '@/public/svgs';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setIsAllChecked } from '@/src/app/_slices/isAllChecked';

type CheckboxNames = 'manage' | 'refund' | 'private' | 'thirdPerson';

function TermsAgreement() {
  const [isOpen, setIsOpen] = useState(false);

  const [isChecked, setIsChecked] = useState({
    manage: false,
    refund: false,
    private: false,
    thirdPerson: false,
  });
  const isAllChecked = useAppSelector((state) => state.isAllChecked);
  const dispatch = useAppDispatch();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCheck = (name: CheckboxNames) => {
    setIsChecked({
      ...isChecked,
      [name]: !isChecked[name],
    });
  };

  const handleAllCheck = () => {
    dispatch(setIsAllChecked(!isAllChecked));
    setIsChecked({
      manage: !isAllChecked,
      refund: !isAllChecked,
      private: !isAllChecked,
      thirdPerson: !isAllChecked,
    });
  };

  useEffect(() => {
    isChecked.manage &&
    isChecked.private &&
    isChecked.refund &&
    isChecked.thirdPerson
      ? dispatch(setIsAllChecked(true))
      : dispatch(setIsAllChecked(false));
  }, [isChecked]);

  return (
    <div className='flex flex-col rounded-lg bg-gray100 px-20pxr py-16pxr'>
      <div
        className={`border-gary300  flex items-center  justify-between gap-4pxr  ${isOpen ? 'mb-12pxr border-b pb-12pxr' : ''}`}
      >
        <div className='flex w-full gap-8pxr'>
          <input
            type='checkbox'
            name='checkAll'
            id='checkTable'
            value='checkTable'
            checked={isAllChecked}
            onChange={() => handleAllCheck()}
          />
          <label
            htmlFor='checkAll'
            className='grow-2 text-gray700 font-caption1-semibold'
          >
            약관 전체 동의
            <span className='ml-2pxr text-error'>(필수)</span>
          </label>
        </div>
        <div onClick={handleToggle} className='cursor-pointer'>
          {isOpen ? (
            <IconArrowUp fill='#949494' />
          ) : (
            <IconArrowDown fill='#949494' />
          )}
        </div>
      </div>
      {isOpen && (
        <ul className='flex flex-col gap-12pxr '>
          <li className='flex justify-between gap-4pxr'>
            <div className='flex w-full gap-8pxr'>
              <input
                type='checkbox'
                name='manage'
                id='checkTable'
                checked={isChecked.manage}
                onChange={() => handleCheck('manage')}
              />
              <label
                htmlFor='manage'
                className='grow-2 text-gray600 font-caption1-semibold'
              >
                캠핑장 운영정책 동의
                <span className='ml-2pxr text-error'>(필수)</span>
              </label>
            </div>
            <IconArrowRightNon />
          </li>
          <li className='flex justify-between gap-4pxr'>
            <div className='flex w-full gap-8pxr'>
              <input
                type='checkbox'
                name='refund'
                id='checkTable'
                checked={isChecked.refund}
                onChange={() => handleCheck('refund')}
              />
              <label
                htmlFor='refund'
                className='grow-2 text-gray600 font-caption1-semibold'
              >
                캠핑장 이용 취소/환불 규정 동의
                <span className='ml-2pxr text-error'>(필수)</span>
              </label>
            </div>
            <IconArrowRightNon />
          </li>
          <li className='flex justify-between gap-4pxr'>
            <div className='flex w-full gap-8pxr'>
              <input
                type='checkbox'
                name='private'
                id='checkTable'
                checked={isChecked.private}
                onChange={() => handleCheck('private')}
              />
              <label
                htmlFor='private'
                className='grow-2 text-gray600 font-caption1-semibold'
              >
                개인정보 수집 및 이용 동의
                <span className='ml-2pxr text-error'>(필수)</span>
              </label>
            </div>
            <IconArrowRightNon />
          </li>
          <li className='flex justify-between gap-4pxr'>
            <div className='flex w-full gap-8pxr'>
              <input
                type='checkbox'
                name='thirdPerson'
                id='checkTable'
                checked={isChecked.thirdPerson}
                onChange={() => handleCheck('thirdPerson')}
              />
              <label
                htmlFor='thirdPerson'
                className='grow-2 text-gray600 font-caption1-semibold'
              >
                개인정보 제 3자 제공 동의
                <span className='ml-2pxr text-error'>(필수)</span>
              </label>
            </div>
            <IconArrowRightNon />
          </li>
        </ul>
      )}
    </div>
  );
}

export default TermsAgreement;
