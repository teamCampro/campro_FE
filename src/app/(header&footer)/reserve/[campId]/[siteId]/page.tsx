import SiteInfo from '../../_components/SiteInfo';
import HeaderAboutReserve from '../../_components/HeaderAboutReserve';
import InfoAboutReserve from '../../_components/InfoAboutReserve';
import InfoAboutBookingPerson from '../../_components/InfoAboutBookingPerson';
import AddVehicle from '../../_components/AddVehicle';
import AddOption from '../../_components/AddOption';
import PaymentMethod from '../../_components/PaymentMethod';
import TotalPayment from '../../_components/TotalPayment';
import TermsAgreement from '../../_components/TermsAgreement';
import PaymentSubmit from '../../_components/PaymentSubmit';
import PaymentAmount from '../../_components/PaymentAmount';
import HeaderContent from '../../_components/HeaderContent';
import getReservationInfo from '@/src/app/_data/reserve/getReservationInfo';
import RoundButton from '@/components/Button/RoundButton';
interface SearchParamsType {
  params: { campId: string; siteId: string };
}

async function Page({ params }: SearchParamsType) {
  const reserveData = await getReservationInfo(params.siteId);

  return (
    <>
      <h2 className='text-block flex-center relative p-16pxr font-title3-semibold tabletMin:hidden tabletMin:font-h1-semibold'>
        <HeaderContent />
      </h2>
      <div className='m-auto mb-125pxr mt-24pxr max-w-1400pxr px-20pxr tabletMin:mt-40pxr tabletMin:px-40pxr'>
        <HeaderAboutReserve />
        <main className='reserve flex flex-col gap-24pxr tabletMin:grid'>
          <section id='reserve' className='flex flex-col gap-24pxr'>
            <RoundButton custom='w-full bg-white border border-gray200 font-body2-semibold !h-46pxr rounded-lg'>
              이용 안내 보기
            </RoundButton>
            <SiteInfo size='mobile' campList={reserveData.result} />
            <InfoAboutReserve />
            <InfoAboutBookingPerson />
            <AddVehicle />
            <AddOption />
            <PaymentMethod />
          </section>
          <section>
            <div className='flex flex-col gap-24pxr border-t pt-24pxr tabletMin:rounded-2xl tabletMin:border tabletMin:border-gray300 tabletMin:p-24pxr'>
              <SiteInfo size='pc' campList={reserveData?.result} />
              <PaymentAmount sitePrice={reserveData?.result?.price} />
              <div className='flex flex-col gap-24pxr'>
                <TotalPayment />
                <TermsAgreement />
                <PaymentSubmit custom='w-full hidden disabled:pointer-events-none tabletMin:flex-center !h-56pxr' />
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
