import { ReactNode } from 'react';

interface InputContainerProps {
  children: ReactNode;
  css: string;
}

function InputContainer({ children, css }: InputContainerProps) {
  return <div className={css}>{children}</div>;
}

export default InputContainer;
