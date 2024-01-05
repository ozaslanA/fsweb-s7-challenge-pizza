import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Success.css";
function Success() {
  const location = useLocation();
  const history = useHistory(); // useHistory hook'u ile history objesini al
  const orderDetails = location.state ? location.state.orderDetails : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/"); // history objesi üzerinden navigate et
    }, 5000);

    return () => clearTimeout(timer);
  }, [history]);

  if (!orderDetails) {
    return (
      <div id="success-page-container">
        <p>Order details not available.</p>
      </div>
    );
  }

  return (
    <div id="success-page-container">
      {/* Success page content here */}
      <p>Order Details:</p>
      <p>Pizza Name: {orderDetails.pizzaAdi}</p>
      <p>Pizza Size:{orderDetails.size}</p>
      <p>Pizza Crust:{orderDetails.crust}</p>
      <p>Pizza Topping:{orderDetails.toppings}</p>
      <p>Note:{orderDetails.note}</p>
      <p>Quantity:{orderDetails.quantity} Adet</p>
      <p>Fiyat:{orderDetails.totalPrice}TL</p>
      <h1>Siparişiniz Alındı Giriş Sayfasına yönlendiriliyosunuz </h1>
    </div>
  );
}

export default Success;
