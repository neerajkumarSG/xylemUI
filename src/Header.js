import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Maps</Link>
      </li>
      <li>
        <Link to="/charts">Charts</Link>
      </li>
    </ul>
  );
};
export default Header;
