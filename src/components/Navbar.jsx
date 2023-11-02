import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li to={"/heroes"}>
            <Link to={"/heroes"}>Traditional Heroes</Link>
          </li>
          <li>
            <Link to={"/rq-heroes"}>RQ Heroes</Link>
          </li>
          <li>
            <Link to={"/colors"}>Colors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
