'use client';

import Button from '@/components/Button';

import { IconArrowLeftNon } from '@/public/svgs';
import SiteInfo from './_components/SiteInfo';
import HeaderAboutReserve from './_components/HeaderAboutReserve';
import InfoAboutReserve from './_components/InfoAboutReserve';
import InfoAboutBookingPerson from './_components/InfoAboutBookingPerson';
import AddVehicle from './_components/AddVehicle';
import AddOption from './_components/AddOption';
import PaymentMethod from './_components/PaymentMethod';
import TotalPayment from './_components/TotalPayment';
import TermsAgreement from './_components/TermsAgreement';
import PaymentSubmit from './_components/PaymentSubmit';
import PaymentAmount from './_components/PaymentAmount';
function Page() {
  const ss = () => {
    console.log(111);
  };
  return (
    <>
      <h2 className='text-block flex-center relative p-16pxr font-title3-semibold tabletMin:hidden tabletMin:font-h1-semibold'>
        <IconArrowLeftNon
          fill='#949494'
          className='absolute left-16pxr top-1/2 block -translate-y-1/2 tabletMin:hidden'
        />
        예약 요청
      </h2>
      <div className='m-auto mb-125pxr mt-24pxr max-w-1400pxr px-20pxr tabletMin:mt-40pxr tabletMin:px-40pxr'>
        <HeaderAboutReserve />
        <main className='reserve flex flex-col gap-24pxr tabletMin:grid'>
          <section className='flex flex-col gap-24pxr'>
            <Button.Round custom='w-full bg-white border border-gray200 font-body2-semibold !h-46pxr rounded-lg'>
              이용 안내 보기
            </Button.Round>
            <SiteInfo size='mobile' />
            <InfoAboutReserve />
            <InfoAboutBookingPerson />
            <AddVehicle />
            <AddOption />
            <PaymentMethod />
          </section>
          <section>
            <div className='flex flex-col gap-24pxr border-t pt-24pxr tabletMin:rounded-2xl tabletMin:border tabletMin:border-gray300 tabletMin:p-24pxr'>
              <SiteInfo size='pc' />
              <PaymentAmount />
              <div className='flex flex-col gap-24pxr'>
                <TotalPayment />
                <TermsAgreement />

                <PaymentSubmit custom='w-full hidden tabletMin:flex-center !h-56pxr' />
              </div>
            </div>
          </section>
        </main>
        <div className='fixed bottom-8pxr left-0pxr w-full bg-white px-20pxr py-16pxr shadow-reserve tabletMin:hidden'>
          <PaymentSubmit custom='w-full !h-56pxr' />
        </div>
      </div>
    </>
  );
}

export default Page;
