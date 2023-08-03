import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...restProps }) => {
  return <button {...restProps} />;
};

Button.displayName = "Button";
export { Button };
export type { ButtonProps };
