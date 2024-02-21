'use client';
import React, {
  ChangeEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import OwnerTitle from '../../_components/OwnerTitle';
import OwnerImageUploader from '../../_components/OwnerImageUploader';
import OwnerInput from '../../_components/OwnerInput/OwnerInput';
import OwnerInputForm from '../../_components/OwnerInput/OwnerInputForm';
import OWNER_INPUT_MAP_DATA from '../../_constants/ownerInputMapData';
import OwnerButton from '../../_components/OwnerButton';
import useTogglePopover from '../../_hooks/useTogglePopover';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../_styles/timePicker.css';
import vi from 'date-fns/locale/vi';
import OwnerGroundTypePopover from '../../_components/OwnerGroundTypePopover';
import { useRouter } from 'next/navigation';
import { IconExitX } from '@/public/svgs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

registerLocale('vi', vi);

interface AddtionalOptionType {
  optionName: string;
  price: number;
}

function SiteRegistrationPage() {
  const router = useRouter();
  const groundTypeRef = useRef<null | HTMLUListElement>(null);
  const checkInRef = useRef<null | DatePicker>(null);
  const checkOutRef = useRef<null | DatePicker>(null);
  const [additionalOption, setAdditionalOption] = useState<AddtionalOptionType>(
    { optionName: '', price: 0 },
  );
  const [additionalOptions, setAdditionalOptions] = useState<
    AddtionalOptionType[]
  >([]);
  const {
    date: checkInDate,
    formmatedDate: checkInFormmatedDate,
    handleChangeDatePicker: handleChangeCheckInDatePicker,
    isPopoverOpen: isCheckInPopoverOpen,
    handleClickPopover: handleClickCheckInPopover,
    setPopoverOpen: setCheckInPopoverOpen,
  } = useTogglePopover();
  const {
    date: checkOutDate,
    formmatedDate: checkOutFormmatedDate,
    handleChangeDatePicker: handleChangeCheckOutDatePicker,
    isPopoverOpen: isCheckOutPopoverOpen,
    handleClickPopover: handleClickCheckOutPopover,
    setPopoverOpen: setCheckOutPopoverOpen,
  } = useTogglePopover();
  const {
    groundType,
    handleChangeGroundType,
    handleClickPopover: handleClickGroundTypePopover,
    isPopoverOpen: isGroundTypePopoverOpen,
    setPopoverOpen: setGroundTypePopoverOpen,
  } = useTogglePopover();

  useEffect(() => {
    const childElement = document.querySelector('.react-datepicker');
    console.log(childElement);
    if (childElement) {
      const parentElement = childElement.parentNode as HTMLDivElement;
      parentElement.style.width = '100%';
    }
  }, [isCheckInPopoverOpen, isCheckOutPopoverOpen]);

  const handleFloorTypeBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (!groundTypeRef.current) return;
    if (groundTypeRef.current.contains(e.relatedTarget as Node)) {
      return;
    }
    setGroundTypePopoverOpen(false);
  };

  const handleCheckInBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (!checkInRef.current) return;

    const timePickerEl = document.querySelector(
      '.react-datepicker__time-container',
    );

    if (timePickerEl && timePickerEl.contains(e.relatedTarget as Node)) {
      return;
    }

    setCheckInPopoverOpen(false);
  };

  const handleCheckOutBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (!checkOutRef.current) return;

    const timePickerEl = document.querySelector(
      '.react-datepicker__time-container',
    );

    if (timePickerEl && timePickerEl.contains(e.relatedTarget as Node)) {
      return;
    }

    setCheckOutPopoverOpen(false);
  };

  const handleClickAdditionalRegistrationButton = () => {
    const { optionName, price } = additionalOption;
    if (
      !optionName ||
      !price ||
      additionalOptions.some((option) => option.optionName === optionName)
    )
      return toast.error(
        !optionName || !price
          ? '추가 옵션 항목을 모두 채워주세요!'
          : '중복된 옵션입니다. 제거 후 추가해 주세요.',
      );
    setAdditionalOptions((prev) => [
      ...prev,
      {
        optionName,
        price,
      },
    ]);
  };

  const handleChangeAddtionalOptionInput = (
    e: ChangeEvent<HTMLInputElement>,
    key: 'optionName' | 'price',
  ) => {
    setAdditionalOption((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleClickRemoveAdditionalOptionButton = (optionName: string) => {
    setAdditionalOptions(
      additionalOptions.filter((option) => optionName !== option.optionName),
    );
  };

  return (
    <div className='flex flex-col items-center'>
      <OwnerTitle>사이트 등록</OwnerTitle>
      <div className='flex flex-col gap-120pxr'>
        <div className='mt-55pxr'>
          <label className='text-20pxr font-semibold leading-8'>
            사이트 이미지
          </label>
          <OwnerImageUploader maxImages={5} gridType='horizontal' />
        </div>
        <OwnerInputForm onSubmit={() => console.log('submited')}>
          <div className='flex-center '>
            <div className='grid w-1055pxr grid-cols-2 place-items-center gap-y-20pxr'>
              {OWNER_INPUT_MAP_DATA.map((data, index) => {
                const { label, placeholder, unit, inputType } = data;
                return (
                  <OwnerInput
                    key={index}
                    inputType={inputType}
                    onChange={() => console.log('changed~')}
                    placeholder={placeholder}
                    inputName={label}
                    unit={unit}
                  />
                );
              })}
              <OwnerInput
                value={groundType}
                onChange={() => console.log('changed~')}
                placeholder='바닥 타입을 선택해주세요.'
                inputName='바닥 타입'
                onFocus={() => {
                  setGroundTypePopoverOpen(true);
                }}
                onBlur={(e) => handleFloorTypeBlur(e)}
                readOnly
              >
                <OwnerButton.Popover
                  isPopoverOpen={isGroundTypePopoverOpen}
                  handleClickPopover={handleClickGroundTypePopover}
                />
                {isGroundTypePopoverOpen && (
                  <OwnerGroundTypePopover
                    groundTypeRef={groundTypeRef}
                    onClick={handleChangeGroundType}
                  />
                )}
              </OwnerInput>

              <div className='flex items-center gap-15pxr'>
                <OwnerInput
                  inputType='number'
                  unit='m'
                  onChange={() => console.log('changed')}
                  inputName='가로 크기'
                  type='small'
                />
                <span className='mt-38pxr text-20pxr text-gray500'>X</span>
                <OwnerInput
                  inputType='number'
                  unit='m'
                  onChange={() => console.log('changed')}
                  inputName='세로 크기'
                  type='small'
                />
              </div>
              <div className='flex w-500pxr flex-col gap-35pxr'>
                <label className='text-20pxr font-semibold leading-8'>
                  반려동물 가능 여부
                </label>
                <div className='flex gap-150pxr'>
                  <div className='flex items-center gap-26pxr'>
                    <span className='text-20pxr font-semibold leading-8'>
                      예
                    </span>
                    <input
                      className='flex-center h-32pxr w-32pxr cursor-pointer appearance-none rounded-full border-2 border-black checked:after:block checked:after:h-18pxr checked:after:w-18pxr checked:after:rounded-full checked:after:bg-black'
                      type='radio'
                      name='pets'
                      value='yes'
                      defaultChecked
                    />
                  </div>
                  <div className='flex items-center gap-26pxr'>
                    <span className='text-20pxr font-semibold leading-8'>
                      아니요
                    </span>
                    <input
                      className='flex-center h-32pxr w-32pxr cursor-pointer appearance-none rounded-full border-2 border-black checked:after:block checked:after:h-18pxr checked:after:w-18pxr checked:after:rounded-full checked:after:bg-black'
                      type='radio'
                      name='pets'
                      value='no'
                    />
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-44pxr'>
                <OwnerInput
                  value={checkInFormmatedDate}
                  onChange={() => console.log('changed')}
                  inputName='입실 시간'
                  type='small'
                  onFocus={() => {
                    setCheckInPopoverOpen(true);
                  }}
                  onBlur={(e) => handleCheckInBlur(e)}
                  readOnly
                >
                  <OwnerButton.Popover
                    isPopoverOpen={isCheckInPopoverOpen}
                    handleClickPopover={handleClickCheckInPopover}
                  />
                  {isCheckInPopoverOpen && (
                    <div className='absolute right-0pxr top-80pxr z-50 w-full'>
                      <DatePicker
                        inline
                        ref={checkInRef}
                        selected={checkInDate}
                        onChange={(date) => handleChangeCheckInDatePicker(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat='h:mm aaaa'
                        locale='vi'
                      />
                    </div>
                  )}
                </OwnerInput>

                <OwnerInput
                  value={checkOutFormmatedDate}
                  onChange={() => console.log('changed')}
                  inputName='퇴실 시간'
                  type='small'
                  onFocus={() => {
                    setCheckOutPopoverOpen(true);
                  }}
                  onBlur={(e) => {
                    handleCheckOutBlur(e);
                  }}
                  readOnly
                >
                  <OwnerButton.Popover
                    isPopoverOpen={isCheckOutPopoverOpen}
                    handleClickPopover={handleClickCheckOutPopover}
                  />
                  {isCheckOutPopoverOpen && (
                    <div className='absolute right-0pxr top-80pxr z-50 w-full'>
                      <DatePicker
                        ref={checkOutRef}
                        inline
                        selected={checkOutDate}
                        onChange={(date) =>
                          handleChangeCheckOutDatePicker(date)
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat='h:mm aaaa'
                        locale='vi'
                      />
                    </div>
                  )}
                </OwnerInput>
              </div>
              <div className='col-span-2 w-full rounded-2xl border border-gray200 p-30pxr'>
                <div className='flex justify-between gap-45pxr'>
                  <div className='flex flex-col gap-7pxr'>
                    <OwnerInput
                      inputName='추가 옵션'
                      onChange={(e) =>
                        handleChangeAddtionalOptionInput(e, 'optionName')
                      }
                      placeholder='ex)바베큐 세트(숯, 그릴)'
                    />
                    <OwnerInput
                      inputType='number'
                      onChange={(e) =>
                        handleChangeAddtionalOptionInput(e, 'price')
                      }
                      placeholder='1개 기준 가격을 입력 해 주세요.'
                      unit='원'
                    />
                    <OwnerButton.Navigate
                      type='registration'
                      customWidth='w-500pxr'
                      custom='w-full h-50pxr py-8pxr px-20pxr rounded-[20px] bg-white !text-black !text-18pxr border-2 border-gray300 hover:bg-white hover:text-black hover:border-black'
                      onClick={handleClickAdditionalRegistrationButton}
                    />
                  </div>
                  <div className='w-full space-y-8pxr'>
                    <h2 className='text-20pxr font-semibold leading-8'>
                      옵션 내역
                    </h2>
                    <ul className='space-y-8pxr'>
                      {additionalOptions.map((option, index) => (
                        <li key={index} className='flex justify-between'>
                          <p className='text-20pxr leading-6 text-gray600'>
                            {option.optionName}
                          </p>
                          <div className='flex gap-8pxr'>
                            <p className='text-20pxr font-medium leading-6 text-black	'>
                              {Number(option.price).toLocaleString()}원
                            </p>
                            <button
                              onClick={() =>
                                handleClickRemoveAdditionalOptionButton(
                                  option.optionName,
                                )
                              }
                            >
                              <IconExitX />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwnerInputForm>
      </div>
      <OwnerButton.Navigate
        type='done'
        customWidth='w-550pxr h-78pxr mt-146pxr mb-100pxr'
        custom='w-550pxr h-78pxr py-8pxr px-20pxr rounded-[20px]'
        onClick={() => {
          router.push('/owner');
        }}
      />
      <ToastContainer
        className='!w-400pxr'
        toastClassName='w-400pxr text-center'
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default SiteRegistrationPage;
