import { ButtonHTMLAttributes, forwardRef } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isRoute?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(({ children, ...props }) => {
  return <button {...props}>{children}</button>;
});

Button.displayName = 'Button';

export default Button;
