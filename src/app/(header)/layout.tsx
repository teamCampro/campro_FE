import { Header } from '../_components';
import { LayoutType } from '../_types';

function Layout({ children }: LayoutType) {
  return (
    <div className='relative h-dvh pt-80pxr'>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
