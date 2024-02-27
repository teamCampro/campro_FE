'use client';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ownerInputBlurHandler } from '../../_utils/OwnerInputBlurHandler';
import OwnerTitle from '../../_components/OwnerTitle';
import OwnerImageUploader from '../../_components/OwnerImageUploader';
import OwnerInput from '../../_components/OwnerInput/OwnerInput';
import OwnerInputForm from '../../_components/OwnerInput/OwnerInputForm';
import OWNER_INPUT_MAP_DATA from '../../_constants/ownerInputMapData';
import OwnerButton from '../../_components/OwnerButton';
import useTogglePopover from '../../_hooks/useTogglePopover';
import OwnerGroundTypePopover from '../../_components/OwnerGroundTypePopover';
import OwnerAddAdditionalOption from '../../_components/OwnerAddAdditionalOption';
import OwnerPetsAvailableRadioInput from '../../_components/OwnerPetsAvailableRadioInput';
import OwnerCampingCategoryPopover from '../../_components/OwnerCampingCategoryPopover';
import useControlImages from '../../_hooks/useControlImages';
import OwnerCampingThemePopover from '../../_components/OwnerCampingThemePopover';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-toastify/dist/ReactToastify.css';
import vi from 'date-fns/locale/vi';
import '../../_styles/timePicker.css';
import 'react-datepicker/dist/react-datepicker.css';
import { useMutation, useQuery } from '@tanstack/react-query';
import { postSiteRegistration } from '@/src/app/_data/owner/postSiteRegistration';
import { getOwnerInfo } from '@/src/app/_data/owner/getOwnerInfo';

registerLocale('vi', vi);

export interface AddtionalOptionType {
  optionName: string;
  optionPrice: number;
}

export interface SiteInputType {
  siteName: string;
  price: number;
  minNights: number;
  minPeople: number;
  campingCategory: string;
  campingTheme: string;
  maxParking: number;
  floorType: string;
  petYN: number;
  checkInTime: string;
  checkOutTime: string;
  siteSize: number[];
  siteImages: string[];
  options: AddtionalOptionType[];
}

type ValueType = 'number' | 'text';

export interface HandleChangeInputValuesPropsType {
  e?: ChangeEvent<HTMLInputElement>;
  key: InputValuesKeyType;
  value?: string | number[] | number | boolean | AddtionalOptionType[];
  valueType?: ValueType;
}

type InputValuesKeyType =
  | 'siteName'
  | 'price'
  | 'minNights'
  | 'minPeople'
  | 'campingCategory'
  | 'campingTheme'
  | 'maxParking'
  | 'floorType'
  | 'petYN'
  | 'checkInTime'
  | 'checkOutTime'
  | 'siteSize'
  | 'siteImages'
  | 'options';

interface OwnerCampingZone {
  campingZoneId: number;
  campingZoneName: string;
}

export interface OwnerInfoType {
  name: string;
  email: string;
  phone: string;
  role: 'OWNER';
  nickname: string;
  ownerCampingZoneList: OwnerCampingZone[];
}

function SiteRegistrationPage() {
  const groundTypeRef = useRef<null | HTMLUListElement>(null);
  const campingCategoryRef = useRef<null | HTMLUListElement>(null);
  const campingThemeRef = useRef<null | HTMLUListElement>(null);
  const checkInRef = useRef<null | DatePicker>(null);
  const checkOutRef = useRef<null | DatePicker>(null);
  const { images, handleSetImages } = useControlImages();
  const [inputValues, setInputValues] = useState<SiteInputType>({
    siteName: '',
    price: 0,
    minNights: 0,
    minPeople: 0,
    campingCategory: '',
    campingTheme: '',
    maxParking: 0,
    floorType: '',
    petYN: 1,
    checkInTime: '',
    checkOutTime: '',
    siteSize: [0, 0],
    siteImages: [''],
    options: [],
  });

  const { data: ownerInfo } = useQuery<OwnerInfoType>({
    queryKey: ['ownerInfo'],
    queryFn: () => getOwnerInfo(Number(localStorage.getItem('userId'))),
  });

  const [additionalOption, setAdditionalOption] = useState<AddtionalOptionType>(
    { optionName: '', optionPrice: 0 },
  );
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
  const {
    campingCategory,
    handleChangeCampingCategory,
    handleClickPopover: handleClickCampingCategoryPopover,
    isPopoverOpen: isCampingCategoryPopoverOpen,
    setPopoverOpen: setCampingCategoryPopoverOpen,
  } = useTogglePopover();
  const {
    campingTheme,
    handleChangeCampingTheme,
    handleClickPopover: handleClickcampingThemePopover,
    isPopoverOpen: iscampingThemePopoverOpen,
    setPopoverOpen: setcampingThemePopoverOpen,
  } = useTogglePopover();

  const handleClickAdditionalRegistrationButton = () => {
    const { optionName, optionPrice } = additionalOption;
    if (
      !optionName ||
      !optionPrice ||
      inputValues.options.some((option) => option.optionName === optionName)
    )
      return toast.error(
        !optionName || !optionPrice
          ? '추가 옵션 항목을 모두 채워주세요!'
          : '중복된 옵션입니다. 제거 후 추가해 주세요.',
      );
    handleChangeInputValues({
      key: 'options',
      value: [...inputValues.options, { optionName, optionPrice }],
    });
  };

  const handleChangeAddtionalOptionInput = (
    e: ChangeEvent<HTMLInputElement>,
    key: 'optionName' | 'optionPrice',
  ) => {
    setAdditionalOption((prev) => ({
      ...prev,
      [key]: key === 'optionPrice' ? Number(e.target.value) : e.target.value,
    }));
    handleChangeInputValues({ key: 'options', value: inputValues.options });
  };

  const handleClickRemoveAdditionalOptionButton = (optionName: string) => {
    handleChangeInputValues({
      key: 'options',
      value: inputValues.options.filter(
        (option) => optionName !== option.optionName,
      ),
    });
  };

  const handleChangeInputValues = ({
    e,
    key,
    value,
    valueType,
  }: HandleChangeInputValuesPropsType) => {
    setInputValues((prev) => ({
      ...prev,
      [key]:
        value !== undefined && value !== null
          ? value
          : valueType === 'number'
            ? e && Number(e.target.value)
            : e && e.target.value,
    }));
  };

  useEffect(() => {
    setInputValues({ ...inputValues, siteImages: images });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    handleChangeInputValues({
      key: 'floorType',
      value: groundType,
    });
  }, [groundType]);

  useEffect(() => {
    handleChangeInputValues({
      key: 'campingCategory',
      value: campingCategory,
    });
  }, [campingCategory]);

  useEffect(() => {
    handleChangeInputValues({
      key: 'campingTheme',
      value: campingTheme,
    });
  }, [campingTheme]);

  useEffect(() => {
    handleChangeInputValues({
      key: 'checkInTime',
      value: checkInFormmatedDate,
    });
  }, [checkInFormmatedDate]);

  useEffect(() => {
    handleChangeInputValues({
      key: 'checkOutTime',
      value: checkOutFormmatedDate,
    });
  }, [checkOutFormmatedDate]);

  useEffect(() => {
    const childElement = document.querySelector('.react-datepicker');

    if (childElement) {
      const parentElement = childElement.parentNode as HTMLDivElement;
      parentElement.style.width = '100%';
    }
  }, [isCheckInPopoverOpen, isCheckOutPopoverOpen]);

  const siteRegistrationMutation = useMutation({
    mutationFn: () =>
      postSiteRegistration({
        siteInfo: inputValues,
        campingZoneId: ownerInfo?.ownerCampingZoneList[0].campingZoneId,
      }),
  });

  return (
    <div className='flex flex-col items-center'>
      <OwnerTitle>사이트 등록</OwnerTitle>
      <div className='flex flex-col gap-120pxr'>
        <div className='mt-55pxr'>
          <label className='text-20pxr font-semibold leading-8'>
            사이트 이미지
          </label>
          <OwnerImageUploader
            maxImages={5}
            gridType='horizontal'
            images={images}
            onSetImages={handleSetImages}
          />
        </div>
        <OwnerInputForm onSubmit={() => console.log('submited')}>
          <div className='flex-center '>
            <div className='grid w-1055pxr grid-cols-2 place-items-center gap-y-20pxr'>
              {OWNER_INPUT_MAP_DATA.map((data, index) => {
                const { label, placeholder, unit, inputType, key } = data;
                return (
                  <OwnerInput
                    key={index}
                    inputType={inputType}
                    onChange={(e) =>
                      handleChangeInputValues({
                        e,
                        key: key as InputValuesKeyType,
                        valueType: inputType as ValueType,
                      })
                    }
                    placeholder={placeholder}
                    inputName={label}
                    unit={unit}
                  />
                );
              })}
              <OwnerInput
                value={groundType}
                placeholder='바닥 타입을 선택해주세요.'
                inputName='바닥 타입'
                onFocus={() => {
                  setGroundTypePopoverOpen(true);
                }}
                onBlur={(event) => {
                  ownerInputBlurHandler({
                    event,
                    inputRef: groundTypeRef,
                    setPopoverOpen: setGroundTypePopoverOpen,
                  });
                }}
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

              <OwnerInput
                value={campingCategory}
                placeholder='캠핑 유형을 선택해주세요.'
                inputName='캠핑 유형'
                onFocus={() => {
                  setCampingCategoryPopoverOpen(true);
                }}
                onBlur={(event) => {
                  ownerInputBlurHandler({
                    event,
                    inputRef: campingCategoryRef,
                    setPopoverOpen: setCampingCategoryPopoverOpen,
                  });
                }}
                readOnly
              >
                <OwnerButton.Popover
                  isPopoverOpen={isCampingCategoryPopoverOpen}
                  handleClickPopover={handleClickCampingCategoryPopover}
                />
                {isCampingCategoryPopoverOpen && (
                  <OwnerCampingCategoryPopover
                    campingTypeRef={campingCategoryRef}
                    onClick={handleChangeCampingCategory}
                  />
                )}
              </OwnerInput>

              <OwnerInput
                value={campingTheme}
                placeholder='캠핑 테마를 선택해주세요.'
                inputName='캠핑 테마'
                onFocus={() => {
                  setcampingThemePopoverOpen(true);
                }}
                onBlur={(event) => {
                  ownerInputBlurHandler({
                    event,
                    inputRef: campingThemeRef,
                    setPopoverOpen: setcampingThemePopoverOpen,
                  });
                }}
                readOnly
              >
                <OwnerButton.Popover
                  isPopoverOpen={iscampingThemePopoverOpen}
                  handleClickPopover={handleClickcampingThemePopover}
                />
                {iscampingThemePopoverOpen && (
                  <OwnerCampingThemePopover
                    campingThemeRef={campingThemeRef}
                    onClick={handleChangeCampingTheme}
                  />
                )}
              </OwnerInput>

              <div className='flex items-center gap-15pxr'>
                <OwnerInput
                  inputType='number'
                  unit='m'
                  onChange={(e) =>
                    handleChangeInputValues({
                      e,
                      key: 'siteSize',
                      value: [Number(e.target.value), inputValues.siteSize[1]],
                    })
                  }
                  inputName='가로 크기'
                  type='small'
                />
                <span className='mt-38pxr text-20pxr text-gray500'>X</span>
                <OwnerInput
                  inputType='number'
                  unit='m'
                  onChange={(e) =>
                    handleChangeInputValues({
                      e,
                      key: 'siteSize',
                      value: [inputValues.siteSize[0], Number(e.target.value)],
                    })
                  }
                  inputName='세로 크기'
                  type='small'
                />
              </div>
              <OwnerPetsAvailableRadioInput
                onChange={handleChangeInputValues}
              />
              <div className='flex items-center gap-44pxr'>
                <OwnerInput
                  value={checkInFormmatedDate}
                  onChange={(e) =>
                    handleChangeInputValues({
                      e,
                      key: 'checkInTime',
                      value: checkInFormmatedDate,
                    })
                  }
                  inputName='입실 시간'
                  type='small'
                  onFocus={() => {
                    setCheckInPopoverOpen(true);
                  }}
                  onBlur={(event) =>
                    ownerInputBlurHandler({
                      event,
                      inputRef: checkInRef,
                      className: '.react-datepicker__time-container',
                      setPopoverOpen: setCheckInPopoverOpen,
                    })
                  }
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
                  onChange={(e) =>
                    handleChangeInputValues({
                      e,
                      key: 'checkOutTime',
                      value: checkOutFormmatedDate,
                    })
                  }
                  inputName='퇴실 시간'
                  type='small'
                  onFocus={() => {
                    setCheckOutPopoverOpen(true);
                  }}
                  onBlur={(event) => {
                    ownerInputBlurHandler({
                      event,
                      inputRef: checkOutRef,
                      className: '.react-datepicker__time-container',
                      setPopoverOpen: setCheckOutPopoverOpen,
                    });
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
              <OwnerAddAdditionalOption
                additionalOptions={inputValues.options}
                onChange={handleChangeAddtionalOptionInput}
                onClickAddButton={handleClickAdditionalRegistrationButton}
                onClickRemoveButton={handleClickRemoveAdditionalOptionButton}
              />
            </div>
          </div>
        </OwnerInputForm>
      </div>
      <OwnerButton.Navigate
        type='done'
        customWidth='w-550pxr h-78pxr mt-146pxr mb-100pxr'
        custom='w-550pxr h-78pxr py-8pxr px-20pxr rounded-[20px]'
        onClick={siteRegistrationMutation.mutate}
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
