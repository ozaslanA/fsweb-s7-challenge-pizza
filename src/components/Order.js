import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Order.css";

const Order = () => {
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

      <div id="product-conteiner">
        <div id="product-main-container">
          <div className="product">
            <img src="" alt="" />
            <div className="product-details">
              <h1>Pizza adı</h1>
              <div className="price-puan">
                <p id="price">Fiyat</p>
                <p id="puan">puan</p>
                <p>satış adedi</p>
              </div>
              <p className="explanation"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
