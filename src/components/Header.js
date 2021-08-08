import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="heading">
      <Link to="/" className="logo text-large text-bold">
        Letno Panel
      </Link>
      <div className="links">
        <Link to="/create-project" className="link text text-bold">
          Create Project
        </Link>
        <Link to="/users" className="link text text-bold">
          Users
        </Link>
      </div>
    </div>
  );
}
