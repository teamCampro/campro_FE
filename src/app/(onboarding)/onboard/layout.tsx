import OnBoardingHeader from '../_components/OnBoardingHeader';
import { LayoutType } from '../../_types';

function Layout({ children }: LayoutType) {
  return (
    <div>
      <OnBoardingHeader />
      {children}
    </div>
  );
}

export default Layout;
