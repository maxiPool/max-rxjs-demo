import routes, { MyRoute } from "./Routes";
import { NavLink } from "react-router-dom";
import React from "react";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <div className="flex-row">
        <div>RxJS Demo</div>
        {routes
          .filter((r: MyRoute) => !r.hide)
          .map((r: MyRoute) => (
            <div key={r.path}>
              <NavLink to={r.path} className={"nav-item"}>
                {r.name}
              </NavLink>
            </div>
          ))}
      </div>
      <div style={{ width: "120%", marginLeft: "-20px", borderBottom: "1px solid black", paddingTop: "16px" }}></div>
    </>
  );
};

export default Navbar;
