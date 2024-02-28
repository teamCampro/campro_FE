import { LayoutType } from '../../_types';
import OnBoardingHeader from '../_components/OnboardingHeader';

function Layout({ children }: LayoutType) {
  return (
    <div className='scrollbar-hide h-screen  overflow-auto bg-gray100'>
      <OnBoardingHeader />
      {children}
    </div>
  );
}

export default Layout;
