import React, { useEffect, useState } from "react";
import "./Components.css";
import axios from "axios";
import { Link } from "react-router-dom";
const HotMenu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6457e4580c15cb1482137304.mockapi.io/pizza")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="products-main">
      <div id="products-main-container">
        <div className="products">
          {products.map((products) => (
            <Link key={products.id} to={`/order/${products.id}`}>
              <button className="products-types">
                <img src={products.foto} />
                <div className="products-price">
                  <h2>{products.pizzaAdi}</h2>
                </div>
                <div className="products-info">
                  <p>{products.puan}</p>
                  <p>({products.satisAdedi})</p>
                  <p className="price"> {products.Fiyat} ₺</p>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotMenu;
