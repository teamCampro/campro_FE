import { LayoutType } from '../../_types';
import OnBoardingHeader from '../_components/OnBoardingHeader';

function Layout({ children }: LayoutType) {
  return (
    <div>
      <OnBoardingHeader />
      {children}
    </div>
  );
}

export default Layout;
