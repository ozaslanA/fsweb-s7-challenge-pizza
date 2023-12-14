import React, { useState } from "react";
import "./OrderForm.css";

const Form = ({ product }) => {
  const [size, setSize] = useState("");
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    console.log(event.target.value);
  };
  const handleCrustChange = (event) => {
    setCrust(event.target.value);
    console.log(event.target.value);
  };
  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      if (toppings.length < 5) {
        setToppings([...toppings, value]);
      }
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
    console.log(event.target.value);
  };

  const handleNotChange = (event) => {
    setNote(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const calculateTotalPrice = () => {
    let totalPrice = product.Fiyat;
  };
  const toppingsList = [
    { value: "pepperoni", label: "Pepperoni" },
    { value: "domates", label: "Domates" },
    { value: "biber", label: "Biber" },
    { value: "sosis", label: "Sosis" },
    { value: "mısır", label: "Mısır" },
    { value: "sucuk", label: "Sucuk" },
    { value: "ananas", label: "Ananas" },
    { value: "jalepeno", label: "Jalepeno" },
    { value: "kabak", label: "Kabak" },
    { value: "soğan", label: "Soğan" },
    { value: "sarımsak", label: "Sarımsak" },
  ];

  return (
    <form className="order-form">
      <div className="form-group">
        <label htmlFor="size">
          Pizza Size
          <span className="span">*</span>
        </label>
        <select
          id="size"
          name="size"
          value={size}
          onChange={handleSizeChange}
          required
        >
          <option value="">-- Boyut Seçin --</option>
          <option value="Küçük">Küçük (25cm)</option>
          <option value="Orta">Orta (30cm)</option>
          <option value="Büyük">Büyük (35cm)</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="crust">
          Hamur Size <span>*</span>
        </label>
        <select
          id="crust"
          name="crust"
          value={crust}
          onChange={handleCrustChange}
          required
        >
          <option value="">-- Kalınlık Seçin --</option>
          <option value="İnce Hamur">İnce Hamur</option>
          <option value="Kalın Hamur">Kalın Hamur</option>
        </select>
      </div>

      <div className="form-group">
        <label>Ek Malzemeler</label>
        <div className="checkbox-group">
          {toppingsList.map((topping) => (
            <label key={topping.value}>
              <input
                type="checkbox"
                value={topping.value}
                checked={toppings.includes(topping.value)}
                onChange={handleToppingChange}
              />
              {topping.label}
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="note">sipariş notu</label>
        <textarea
          id="note"
          name="note"
          value={note}
          placeholder="eklemek istediğiniz not var mı ?"
          onChange={handleNotChange}
          rows={4}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Adet</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          max="10"
        />
      </div>
      <div className="form*group">
        <label htmlFor="total-price">Toplam Fiyat</label>
        <span id="total-price">$</span>
      </div>
      <div className="form*group">
        <button type="submit">Sipariş Ver</button>
      </div>
    </form>
  );
};

export default Form;
