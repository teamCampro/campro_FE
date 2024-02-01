interface LabelProps {
  labelName: string;
  htmlFor: string;
}

function Label({ labelName, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className='text-black'>
      {labelName}
    </label>
  );
}

export default Label;
