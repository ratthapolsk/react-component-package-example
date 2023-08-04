import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC = (props: ButtonProps) => {
  const  {
    ...rest
  } = props;
  return <button {...rest} />;
};

Button.displayName = "Button";
export { Button };
export type { ButtonProps };
