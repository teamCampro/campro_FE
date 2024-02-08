interface LabelProps {
  children: string;
  htmlFor?: string;
  className: string;
}

function Label({ children, htmlFor, className }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}

export default Label;
