import BoxChecked from '@/public/svgs/checkbox.svg';
import BoxEmpty from '@/public/svgs/checkboxEmpty.svg';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { requiredValidate } from '../../_constants/inputValidate';
interface Props {
  name: string;
  className?: string;
  rules?: RegisterOptions;
  value: 'USER' | 'OWNER';
  labelText: string;
}

function SignUpRadio({
  name,
  rules = requiredValidate,
  value,
  labelText,
}: Props) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  return (
    <>
      <input
        {...register(name, rules)}
        id={value}
        type='radio'
        value={value}
        className='hidden'
      />
      <label htmlFor={value} className='flex-center gap-8pxr'>
        {watch(name) === value ? <BoxChecked /> : <BoxEmpty />}
        <span className='text-white font-body2-medium'>{labelText}</span>
      </label>
    </>
  );
}

export default SignUpRadio;
