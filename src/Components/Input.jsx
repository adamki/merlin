import React from "react";

export const Input = React.forwardRef((props, ref) => {
  return <input className="input" ref={ref} {...props} />;
});

Input.displayName = "Input";
