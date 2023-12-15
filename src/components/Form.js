import React, { useState } from "react";
import "./OrderForm.css";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OrderFormSchema = Yup.object().shape({
  toppings: Yup.array()
    .min(2, "En az 2 malzeme seçin")
    .max(5, "En fazla 5 malzeme seçebilirsiniz"),
  size: Yup.string().required("En az bir seçim yapınız"),
});

const Form = ({ product }) => {
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [tel, setTel] = useState(0);
  const [crust, setCrust] = useState("");
  const [toppings, setToppings] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [validationErrors, setValidationErrors] = useState({});
  const [orderDetails, setOrderDetails] = useState(null);

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
    setQuantity(parseInt(event.target.value));
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleTelChange = (event) => {
    setTel(event.target.value);
  };
  const handleAdressChange = (event) => {
    setAdress(event.target.value);
  };
  const calculateTotalPrice = () => {
    let totalPrice = product.Fiyat;

    //Boyuta göre fiyat hesaplama
    if (size === "Orta") {
      totalPrice += 5;
    } else if (size === "Büyük") {
      totalPrice += 10;
    }
    // Hamur kalınlığına göre hesaplama
    if (crust === "İnce Hamur") {
      totalPrice += 10;
    } else if (crust === "Kalın Hamur") {
      totalPrice += 20;
    }

    // ek malzemeleri hesaplama
    totalPrice += toppings.length * 1.5;
    console.log(totalPrice);

    // toplam tutarı hesaplaöa

    totalPrice *= quantity;

    return totalPrice;
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
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
      try {
        await OrderFormSchema.validate({ toppings }, { abortEarly: false });

        const order = {
          pizzaAdi: product.pizzaAdi,
          size: size,
          crust: crust,
          toppings: toppings,
          note: note,
          quantity: quantity,
          totalPrice: calculateTotalPrice(),
        };
        console.log(order);
        //siparişi apiye gönderiyoruz
        const response = await axios.post(
          "https://6457e4580c15cb1482137304.mockapi.io/uruncesitleri",
          order
        );
        console.log(response);

        //başarılı ise formu sıfırla ve succsese yolla

        form.reset();
        setOrderDetails(order);
        history(`/success`, { state: { orderDetails: order } });
      } catch (error) {
        if (error.inner) {
          const errors = {};
          error.inner.forEach((err) => {
            errors[err.path] = err.message;
          });
          setValidationErrors(errors);
        } else {
          // Doğrulama hatası iç içe değilse genel bir hata durumu olabilir.
          console.error("Doğrulama hatası:", error);
        }
        return; // Fonksiyonu burada sonlandır.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
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
      {validationErrors.toppings && (
        <div className="error-message">{validationErrors.size}</div>
      )}
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
      {validationErrors.toppings && (
        <div className="error-message">{validationErrors.crust}</div>
      )}

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
        {validationErrors.toppings && (
          <div className="error-message">{validationErrors.toppings}</div>
        )}
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
        <label htmlFor="text">İsim Soyisim:</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Siparişi teslim alacak kişi"
          required
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="number">Telefon:</label>
        <input
          id="tel"
          name="tel"
          value={tel}
          onChange={handleTelChange}
          placeholder=""
          required
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="adress">Adres:</label>
        <textarea
          id="adress"
          name="adress"
          value={adress}
          onChange={handleAdressChange}
          placeholder="Adres giriniz"
          rows={4}
          required
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
        <span id="total-price">{calculateTotalPrice()}</span>
      </div>
      <div className="form*group">
        <button type="submit">Sipariş Ver</button>
      </div>
    </form>
  );
};

export default Form;
