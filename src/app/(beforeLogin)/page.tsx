import Header from '../_components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='px-4 py-2 sm:px-8 sm:py-3 tablet:text-red flex-center bg-primary100 text-white mobile:text-black'>
        하나
      </div>
      <div className='px-4 py-2 sm:px-8 sm:py-3 flex-center bg-primary50 text-white'>
        둘
      </div>
      <div className='px-4 py-2 sm:px-8 sm:py-3 flex-center bg-emred text-white'>
        셋
      </div>
      <div className='flex-center font-h1'>캠프로</div>
      <div className='flex-center font-h3'>화이팅</div>
    </>
  );
}
