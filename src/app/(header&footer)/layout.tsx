import { Footer, Header } from '../_components';
import { LayoutType } from '../_types';

function Layout({ children }: LayoutType) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
