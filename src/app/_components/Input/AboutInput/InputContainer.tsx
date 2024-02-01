import { ReactNode } from 'react';

interface InputContainerProps {
  children: ReactNode;
  className: string;
}

function InputContainer({ children, className }: InputContainerProps) {
  return <div className={className}>{children}</div>;
}

export default InputContainer;
