import { IconArrowDown, IconArrowRightNon } from '@/public/svgs';

function TermsAgreement() {
  return (
    <div className='flex flex-col rounded-lg  bg-gray100 px-20pxr py-16pxr'>
      <div className='border-gary300 mb-12pxr flex justify-between gap-4pxr border-b pb-12pxr'>
        <input
          type='checkbox'
          name='checkAll'
          id='checkTable'
          value='checkTable'
        />
        <label htmlFor='checkAll' className='grow-2 font-caption1-semibold'>
          약관 전체 동의
          <span className='ml-2pxr text-error'>(필수)</span>
        </label>
        <IconArrowDown />
      </div>
      <ul className='flex flex-col gap-12pxr '>
        <li className='flex justify-between gap-4pxr'>
          <input type='checkbox' name='manage' id='checkTable' />
          <label htmlFor='manage' className='grow-2 font-caption1-semibold'>
            캠핑장 운영정책 동의
            <span className='ml-2pxr text-error'>(필수)</span>
          </label>
          <IconArrowRightNon />
        </li>
        <li className='flex justify-between gap-4pxr'>
          <input type='checkbox' name='refund' id='checkTable' />
          <label htmlFor='refund' className='grow-2 font-caption1-semibold'>
            캠핑장 이용 취소/환불 규정 동의
            <span className='ml-2pxr text-error'>(필수)</span>
          </label>
          <IconArrowRightNon />
        </li>
        <li className='flex justify-between gap-4pxr'>
          <input type='checkbox' name='private' id='checkTable' />
          <label htmlFor='private' className='grow-2 font-caption1-semibold'>
            개인정보 수집 및 이용 동의
            <span className='ml-2pxr text-error'>(필수)</span>
          </label>
          <IconArrowRightNon />
        </li>
        <li className='flex justify-between gap-4pxr'>
          <input type='checkbox' name='thirdPerson' id='checkTable' />
          <label
            htmlFor='thirdPerson'
            className='grow-2 font-caption1-semibold'
          >
            개인정보 제 3자 제공 동의
            <span className='ml-2pxr text-error'>(필수)</span>
          </label>
          <IconArrowRightNon />
        </li>
      </ul>
    </div>
  );
}

export default TermsAgreement;
