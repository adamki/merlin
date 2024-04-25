import React from "react";


export const Select = React.forwardRef(
  ({ onChange, onBlur, options, name, label }, ref) => (
    <>
      <label className="label">{label}</label>
      <select
        className="select"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      >
				{
					options.map(([abbr, word]) => (
						<option value={abbr} key={abbr}>{word}</option>
					))
				}
      </select>
    </>
  ),
);

Select.displayName = "Select";
