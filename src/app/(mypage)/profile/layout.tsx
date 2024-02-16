import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { LayoutType } from '../../_types';
import ProfileHeader from './_components/ProfileHeader';
import SideLists from './_components/SideLists';

function Layout({ children }: LayoutType) {
  return (
    <div>
      <Header />
      <ProfileHeader />
      <main className='profile profile-screen m-auto flex w-full max-w-1440pxr flex-col tabletMin:grid'>
        <section className='border-r border-gray200 mobile:hidden'>
          <SideLists />
        </section>
        <section className='scrollbar-hide p-20pxr tabletMin:overflow-y-auto tabletMin:p-40pxr'>
          {children}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
