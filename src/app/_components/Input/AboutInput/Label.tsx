interface LabelProps {
  children: string;
  htmlFor: string;
}

function Label({ children, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className='text-black'>
      {children}
    </label>
  );
}

export default Label;
