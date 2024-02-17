import { Header } from '../_components';
import { LayoutType } from '../_types';
import '../_styles/datePicker.css';

function Layout({ children }: LayoutType) {
  return (
    <div className='relative h-dvh'>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
