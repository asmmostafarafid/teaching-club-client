import React from "react";
import { Link } from "react-router-dom";

const FooterCol = (props) => {
  const menuItem = props.menuItems;
  const menuTitle = props.menuTitle;
  return (
    <div className="col-md-4 col-sm-12 text-center">
      <h6 className="text-primary">{menuTitle ? menuTitle : " "}</h6>
      <ul className="list-unstyled mt-4">
        {menuItem.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              style={{ textDecoration: "none" }}
              className="text-secondary"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
