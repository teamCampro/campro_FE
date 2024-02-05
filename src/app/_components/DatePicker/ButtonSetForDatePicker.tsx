function ButtonSetForDatePicker({
  handleButtonClick,
}: {
  handleButtonClick: (index: number) => void;
}) {
  const buttonLabels = ['당일치기', '1박 2일', '2박 3일', '3박 4일'];

  return (
    <>
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          type='button'
          className='buttonForDatePicker'
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </button>
      ))}
    </>
  );
}

export default ButtonSetForDatePicker;
