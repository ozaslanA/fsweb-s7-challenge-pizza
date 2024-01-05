import React from "react";
import { NavLink } from "react-router-dom";
import ProductsAll from "../ProductsAll";
import Footer from "../Footer";

function Products() {
  return (
    <div>
      <div id="header">
        <NavLink
          to="/"
          style={{ color: "#CE2829", textDecoration: "underline" }}
        >
          <h2> Teknolojik Yemekler </h2>
        </NavLink>
      </div>
      <ProductsAll />
      <Footer />
    </div>
  );
}

export default Products;
