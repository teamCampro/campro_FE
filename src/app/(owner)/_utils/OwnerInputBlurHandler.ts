import { FocusEvent, MutableRefObject } from 'react';
import DatePicker from 'react-datepicker';

interface Props {
  event: FocusEvent<HTMLInputElement, Element>;
  inputRef:
    | MutableRefObject<DatePicker<never, undefined> | null>
    | MutableRefObject<HTMLUListElement | null>;
  className?: string;
  setPopoverOpen: (boolean: boolean) => void;
}

export const ownerInputBlurHandler = ({
  event,
  inputRef,
  className,
  setPopoverOpen,
}: Props) => {
  if (!inputRef.current) return;

  if (className) {
    const element = document.querySelector(`${className}`);

    if (element && element.contains(event.relatedTarget as Node)) {
      return;
    }
  }
  const inputElement = inputRef.current;
  if (
    inputElement instanceof Element &&
    inputElement.contains(event.relatedTarget as Node)
  ) {
    return;
  }

  setPopoverOpen(false);
};
