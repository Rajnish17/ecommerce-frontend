import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./css/nav.css";

const Navbar = () => {

  const totalitem =useSelector((state) => state.counter.totalCartItem);

  return (
    <div className="nav_container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">M-Shop</span>
          <Link to="/cart"><button className="btn btn-primary"> <span>Cart {totalitem}</span></button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
