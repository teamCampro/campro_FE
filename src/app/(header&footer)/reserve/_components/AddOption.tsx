import { IconPlus, IconMinus } from '@/public/svgs';

function AddOption() {
  return (
    <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
      <h3 className=' text-black font-title3-semibold tabletMin:font-title1-semibold'>
        추가 옵션
      </h3>
      <ul className='flex flex-col gap-16pxr'>
        <li className='flex-center flex-wrap justify-between'>
          <h3 className='reserve-options font-body2-medium tabletMin:font-body1-medium'>
            장작 세트
          </h3>
          <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
            <div className='h-20pxr w-20pxr'>
              <IconMinus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
            <span className='font-medium font-body2-medium tabletMin:font-body1-medium'>
              1
            </span>
            <div className='h-20pxr w-20pxr'>
              <IconPlus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
          </div>
          <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
            20,000원
          </h3>
        </li>
        <li className='flex-center flex-wrap justify-between'>
          <h3 className='reserve-options font-medium font-body2-medium tabletMin:font-body1-medium'>
            전기 장판
          </h3>
          <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
            <div className='h-20pxr w-20pxr'>
              <IconMinus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
            <span className='font-medium font-body2-medium tabletMin:font-body1-medium'>
              1
            </span>
            <div className='h-20pxr w-20pxr'>
              <IconPlus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
          </div>
          <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
            20,000원
          </h3>
        </li>
        <li className='flex-center flex-wrap justify-between'>
          <h3 className='reserve-options font-body2-medium tabletMin:font-body1-medium'>
            이불세트(덮는 이불 2장)
          </h3>
          <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
            <div className='h-20pxr w-20pxr'>
              <IconMinus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
            <span className='font-body2-medium tabletMin:font-body1-medium'>
              1
            </span>
            <div className='h-20pxr w-20pxr'>
              <IconPlus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
          </div>
          <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
            20,000원
          </h3>
        </li>
        <li className='flex-center flex-wrap justify-between'>
          <h3 className='reserve-options whitespace-pre-line  font-body2-medium tabletMin:font-body1-medium'>
            욕실세트(치약+일회용 칫솔)
          </h3>
          <div className='flex-center w-73pxr justify-between gap-16pxr tabletMin:w-97pxr'>
            <div className='h-20pxr w-20pxr'>
              <IconMinus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
            <span className='font-body2-medium tabletMin:font-body1-medium'>
              1
            </span>
            <div className='h-20pxr w-20pxr'>
              <IconPlus width='100%' height='100%' viewBox='0 0 24 24' />
            </div>
          </div>
          <h3 className='font-body2-bold basis-78pxr tabletMin:font-body1-bold'>
            20,000원
          </h3>
        </li>
      </ul>
    </div>
  );
}

export default AddOption;
