import ReserveItem from './_components/ReserveItem';
import SideLists from './_components/SideLists';
import ReserveStateLists from './_components/ReserveStateLists';
import ProfileHeader from './_components/ProfileHeader';

function Page() {
  return (
    <>
      <ProfileHeader />
      <main className='profile profile-screen m-auto flex w-full max-w-1440pxr flex-col tabletMin:grid'>
        <section className='border-r border-gray200 mobile:hidden'>
          <SideLists />
        </section>
        <section className='scrollbar-hide p-20pxr tabletMin:overflow-y-auto tabletMin:p-40pxr'>
          <h2 className='mb-24pxr hidden font-title1-bold tabletMin:block'>
            예약내역
          </h2>
          <ReserveStateLists />
          <div className='flex flex-col gap-16pxr '>
            <ReserveItem />
            <ReserveItem />
            <ReserveItem />
            <ReserveItem />
            <ReserveItem />
          </div>
        </section>
      </main>
    </>
  );
}

export default Page;
