import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form';
interface Props {
  name: string;
  className?: string;
  rules?: RegisterOptions;
  uncheckedIcon: React.ReactNode;
  checkedIcon: React.ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  setRole?: (role: 'USER' | 'OWNER') => void;
}

function SignUpCheckbox({
  name,
  rules,
  uncheckedIcon,
  checkedIcon,
  onChange,
  setRole,
}: Props) {
  const {
    register,
    formState: { errors },
    watch,
    getValues,
    setValue,
  } = useFormContext();

  const isChecked = watch(name);

  const handleClickUser = () => {
    if (!setRole) return;
    if (getValues('boss')) {
      setValue('boss', false);
      setRole('USER');
    }
    setValue('user', !getValues('user'));
  };

  const handleClickBoss = () => {
    if (!setRole) return;
    if (getValues('user')) {
      setValue('user', false);
      setRole('OWNER');
    }
    setValue('boss', !getValues('boss'));
  };

  const handleClick = () => {
    name === 'boss' ? handleClickBoss() : handleClickUser();
  };
  return (
    <>
      <input
        {...register(name, rules)}
        type='checkbox'
        className='hidden'
        onChange={onChange}
      />
      <div onClick={handleClick}>{isChecked ? checkedIcon : uncheckedIcon}</div>
    </>
  );
}

export default SignUpCheckbox;
