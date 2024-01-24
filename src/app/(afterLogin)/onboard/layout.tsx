import { ReactNode } from 'react';

interface LayoutType {
  children: ReactNode;
}

function Layout({ children }: LayoutType) {
  return (
    <div className='custom-height mobile:custom-height-m flex flex-col bg-gray100'>
      {children}
    </div>
  );
}

export default Layout;
