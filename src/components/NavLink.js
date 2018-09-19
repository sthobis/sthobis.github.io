import { Link } from "gatsby";
import React from "react";

const NavLink = props => (
  <Link
    {...props}
    getProps={(props) => {
      const isActive = props.isCurrent || props.location.pathname === `${props.href}/`
      return {
        className: isActive ? "active" : undefined
      }
    }}
  />
)

export default NavLink