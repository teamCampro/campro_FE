import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LayoutType } from '../../_types';
import ProfileHeader from './_components/ProfileHeader';
import SideLists from './_components/SideLists';

async function getData() {
  const res = await fetch('/data/reserveListMockData.json');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

function Layout({ children }: LayoutType) {
  return (
    <div>
      <Header />
      <ProfileHeader />
      <main className='profile profile-screen m-auto flex w-full max-w-1440pxr flex-col tabletMin:grid'>
        <section className='border-r border-gray200 mobile:hidden'>
          <SideLists />
        </section>
        <section className='scrollbar-hide px-20pxr pb-48pxr pt-20pxr tabletMin:overflow-y-auto tabletMin:px-40pxr tabletMin:pb-48pxr tabletMin:pt-40pxr'>
          {children}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
