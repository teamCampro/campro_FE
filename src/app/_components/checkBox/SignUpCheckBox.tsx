import { useFormContext } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form';
interface Props {
  name: string;
  className?: string;
  rules?: RegisterOptions;
  uncheckedIcon: React.ReactNode;
  checkedIcon: React.ReactNode;
}

function SignUpCheckbox({ name, rules, uncheckedIcon, checkedIcon }: Props) {
  const {
    register,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useFormContext();

  const isChecked = watch(name);

  const handleClickUser = () => {
    if (getValues('boss')) {
      setValue('boss', false);
    }
    setValue('user', !getValues('user'));
  };

  const handleClickBoss = () => {
    if (getValues('user')) {
      setValue('user', false);
    }
    setValue('boss', !getValues('boss'));
  };

  const handleClick = () => {
    name === 'boss' ? handleClickBoss() : handleClickUser();
  };
  return (
    <>
      <input {...register(name, rules)} type='checkbox' className='hidden' />
      <div onClick={handleClick}>{isChecked ? checkedIcon : uncheckedIcon}</div>
    </>
  );
}

export default SignUpCheckbox;
