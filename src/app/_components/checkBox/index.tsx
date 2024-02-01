'use client';
import { useEffect, useState } from 'react';

function CheckBox({ type }: { type: string }) {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked((prev) => !prev);
  };
  useEffect(() => {
    console.log(checked);
  }, [checked]);

  return (
    <input
      type='checkbox'
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

export default CheckBox;
