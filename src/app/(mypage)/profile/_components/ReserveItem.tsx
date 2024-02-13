'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonListsType {
  id: number;
  name: string;
}

const BUTTON_LISTS: ButtonListsType[] = [
  { id: 1, name: '후기 등록' },
  { id: 2, name: '예약 상세' },
];

function ReserveItem() {
  return (
    <Link href={'/profile/reserveList/1'} className='w-full'>
      <figure className='flex flex-col justify-start gap-24pxr rounded-xl border p-24pxr tabletMin:flex-row'>
        <Image
          src='https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXBpbmd8ZW58MHwwfDB8fHww'
          width={140}
          height={140}
          alt='캠핑장 사이트 이미지'
          className='rounded-xl'
        />
        <div className='flex w-full flex-col justify-between mobile:gap-20pxr tabletMin:flex-row'>
          <div className='profile-width flex w-full flex-col gap-16pxr'>
            <div className=''>
              <h3 className='text-primary100 font-body2-bold'>예약완료</h3>
              <h2 className='profile-lineOver whitespace-nowrap text-gray800 font-title1-bold'>
                자연숲 캠핑장
              </h2>
              <div className='text-gray600 font-body2-medium'>
                A사이트 | A1-08
              </div>
            </div>
            <div className='flex items-end justify-start gap-16pxr'>
              <div>
                <small className='text-gray500 font-caption2-semibold'>
                  입실
                </small>
                <h3 className='text-800 font-body1-bold'>12/28(토)</h3>
              </div>
              <div className='text-800 font-title3-bold'>-</div>
              <div>
                <small className='text-gray500 font-caption2-semibold'>
                  퇴실
                </small>
                <h3 className='text-800 font-body1-bold'>12/28(토)</h3>
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse justify-start gap-12pxr tabletMin:flex-col'>
            {BUTTON_LISTS.map((list) => {
              return (
                <Button.Round
                  key={list.id}
                  size='md'
                  custom=' !h-36pxr px-24pxr py-8pxr whitespace-nowrap !rounded-md !font-caption1-semibold bg-white text-gray700 border border-gray300 !bg-white hover:border-primary100 w-full tabletMin:!w-106pxr'
                >
                  {list.name}
                </Button.Round>
              );
            })}
          </div>
        </div>
      </figure>
    </Link>
  );
}

export default ReserveItem;
