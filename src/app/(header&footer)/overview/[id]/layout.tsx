import { LayoutType } from '@/src/app/_types';

function Layout({ children }: LayoutType) {
  return (
    <>
      <div className='flex-center px-40pxr mobile:p-0pxr'>{children}</div>
    </>
  );
}

export default Layout;
