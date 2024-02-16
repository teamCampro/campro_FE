import { ChangeEvent } from 'react';

export const handleChangeOwnerInputValue = (
  e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  inputName: string,
) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(inputName, e.target.value);
  }
};

export const handleOwnerInputDefaultValue = (inputName: string) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(inputName) as string;
  }
};
