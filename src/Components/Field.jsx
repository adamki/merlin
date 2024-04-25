import React from "react";

export const Field = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div className="row">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      {children}
      {error && <small>{error.message}</small>}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child.props) {
    return child.props.id;
  }
};
