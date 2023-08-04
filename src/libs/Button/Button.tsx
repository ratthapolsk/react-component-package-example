import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({ ...restProps }) => {
  return <button {...restProps} />;
};
Button.displayName = "Button";
export { Button };
export type { ButtonProps };
