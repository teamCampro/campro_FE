import { Header } from '../_components';
import { LayoutType } from '../_types';

function Layout({ children }: LayoutType) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
