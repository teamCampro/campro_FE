import Button from '@/components/Button';
import { IconTest } from '@/public/svgs';
import Image from 'next/image';

function NewCampSiteItem() {
  const move = (id: number) => {
    // const newSearchParams = new URLSearchParams({
    //   checkIn: searchParams.get('checkIn') || '',
    //   checkOut: searchParams.get('checkOut') || '',
    //   adult: searchParams.get('adult') || '',
    //   child: searchParams.get('child') || '',
    //   pet: searchParams.get('pet') || '',
    // });
    // router.push(`/reserve/${pathName.id}/${id}?${newSearchParams.toString()}`);
  };
  const infos = ['텐트캠핑', '성인 2룸', '텐트옆주차', '애완 동반', '최소 1박'];
  return (
    <article className='flex gap-20pxr rounded-2xl bg-gray100 p-24pxr'>
      <div className='max-h-164pxr w-full max-w-164pxr mobile:h-full mobile:max-h-none mobile:max-w-none'>
        <Image
          width={164}
          height={164}
          style={{
            width: '100%',
            height: 'auto',
          }}
          className='aspect-square rounded-2xl mobile:aspect-340/220 mobile:rounded-b-none mobile359:rounded-none'
          src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D'
          alt='dd'
        />
      </div>
      <div className='flex w-full flex-col gap-20pxr'>
        <div className='flex h-auto w-full flex-col gap-16pxr rounded-xl bg-white p-16pxr'>
          <div className='flex flex-col'>
            <div className='flex items-center justify-between'>
              <h6 className='font-title3-bold'>B1-04</h6>
              <span className='text-nowrap text-black font-body1-bold mobile:font-title3-semibold'>
                {(40000).toLocaleString('ko-KR', { maximumFractionDigits: 4 })}
                원
              </span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-gray500 font-caption2-medium'>
                입실 12:00 - 퇴실 11:00
              </span>
              <span className='text-gray500 font-caption2-medium'>
                1박 기준
              </span>
            </div>
          </div>

          <div className='ml-auto mobile:m-0pxr'>
            <Button.Round
              size='sm'
              custom={`w-98pxr !h-36pxr font-caption1-semibold text-white px-24pxr py-8xr mobile:w-full`}
              onClick={() => move(1)}
            >
              선택하기
            </Button.Round>
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='flex gap-12pxr'>
            {infos.map((info) => (
              <li key={info} className='text-gray500 font-caption2-semibold'>
                {info}
              </li>
            ))}
          </ul>
          <button
            type='button'
            className='flex cursor-pointer items-end gap-2pxr text-second100 font-caption1-semibold'
          >
            상세정보
            <IconTest />
          </button>
        </div>
      </div>
    </article>
  );
}

export default NewCampSiteItem;
