import { IconLocation } from '@/public/svgs';

interface Field {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  name: string;
  ref: React.Ref<any>;
}

interface Props {
  field: Field;
  onRenderButton?: () => void;
}

function PlaceInputView({
  field: { value, ...field },
  onRenderButton,
}: Props): JSX.Element {
  return (
    <div className=' relative flex w-full  flex-110 gap-4pxr'>
      <IconLocation className='absolute left-16pxr top-16pxr ' />
      <input
        onClick={onRenderButton}
        readOnly
        autoComplete='off'
        {...field}
        value={value}
        placeholder='어디로 갈까요?'
        className=' w-full cursor-pointer whitespace-nowrap rounded-lg bg-gray100 py-16pxr pl-44pxr pr-16pxr text-black placeholder-gray500 outline-none font-body2-semibold placeholder:font-body2-medium'
      />
    </div>
  );
}

export default PlaceInputView;
