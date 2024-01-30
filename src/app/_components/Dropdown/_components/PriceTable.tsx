import PriceInput from './PriceInput';

function PriceTable() {
  return (
    <li className='flex-center justify-between'>
      <PriceInput />
      <div className='w-16pxr border-b-2 border-b-gray700'></div>
      <PriceInput />
    </li>
  );
}

export default PriceTable;
