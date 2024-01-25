import { ReactNode } from 'react';

interface LayoutType {
  children: ReactNode;
}

function layout({ children }: LayoutType) {
  return <div>{children}</div>;
}

export default layout;
