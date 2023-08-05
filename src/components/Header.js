import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const { clickButton } = props;
  return (
    <div id="Header-page">
      <div id="menu">
        <div id="menu-text">
          <h1 className="menu-title"> Teknolojik Yemekler </h1>
          <h3 className="menu-subtitle"> Fırsatı kaçırma </h3>
          <h2>
            KOD ACIKTIRIR <br></br>
            PİZZA,DOYURUR
          </h2>
          <button onClick={clickButton} data-cy="Header-button">
            <h1> Acıktım</h1>
            <Link to="/pizza"></Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
