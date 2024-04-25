import { Link } from "react-router-dom";

export const Section = ({ title, children, url }) => {
  return (
    <div>
      <div>
        <h4>{title}</h4>
        <Link to={url}>Edit</Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export const SectionRow = ({ children }) => {
  return <div>{children}</div>;
};
