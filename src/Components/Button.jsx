import { forwardRef } from "react";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }) => {
    return (
      <button className={`btn btn-${variant}`} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
