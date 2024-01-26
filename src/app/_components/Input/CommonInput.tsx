import { useFormContext } from 'react-hook-form';

interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  className: string;
}

function CommonInput({
  name,
  type = 'text',
  placeholder,
  className,
}: InputProps) {
  const { register } = useFormContext();
  return (
    <input
      {...register(name)}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default CommonInput;
