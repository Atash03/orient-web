import { ButtonHTMLAttributes, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isRoute?: boolean
  href?: string
}

const Button = forwardRef<HTMLButtonElement, Props>(({
  isRoute,
  href,
  ...props
}) => {
  return (
    <button {...props}>Default buton</button>
  )
});

Button.displayName = 'Button';

export default Button;