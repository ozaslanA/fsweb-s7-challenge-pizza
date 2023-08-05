import React, { useState } from "react";
import styled from "styled-components";
import dataInput from "./dataInput";

import * as Yup from "yup";

const SCForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 30px 0;
`;
const SCBox = styled.p`
  width: 40%;
  background-color: gray;
  padding: 20px;
  margin: 5px;
`;
const SCSubmit = styled.button`
  padding: 10px;
  cursor: pointer;
  font-weight: 700;
`;
const SCLabel = styled.label`
  color: white;
  font-weight: 700;
`;
const SCError = styled.p`
  color: white;
  font-weight: 500;
  font-size: 12px;
`;
const SCText = styled.span`
  color: white;
  font-weight: 700;
  margin-right: 4px;
`;
const SCChecked = styled.label`
  color: white;
  font-weight: 500;
`;
const SCOrder = styled.div`
  width: 40%;
  padding: 20px;
  margin: 5px;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;
const SCOptional = styled.span`
  font-size: 10px;
  font-weight: 300;
`;

const kurallar = Yup.object().shape({
  isim: Yup.string()
    .min(3, "İsim En az 3 Karakter")
    .required("Lütfen İsim girin"),
  phone: Yup.number()
    .typeError("Telefon numarasına benzemiyor")
    .positive("0-9 ARASI RAKAM GİRİN")
    .integer("Telefon numarasında rakam olmalı")
    .required("Telefon numarası girin"),
  adress: Yup.string()
    .min(30, "Adres kapı no/bina no/sokak/mahalle/semt şeklinde giriniz")
    .required("Lütfen adres giriniz"),
  types: Yup.mixed()
    .oneOf(["small", "medium", "Bigger"], "Lütfen Hamur Seçiniz")
    .required(),
  malzeme1: Yup.boolean(),
  malzeme2: Yup.boolean(),
  malzeme3: Yup.boolean(),
  malzeme4: Yup.boolean(),
  malzeme5: Yup.boolean(),
  özel: Yup.string(),
  siparisSayisi: Yup.number()
    .positive("Lütfen Pozitif bir sayı giriniz")
    .max(0, "En az 1 adet")
    .required("Lütfen Adet giriniz"),
});

const Form = () => {
  const inialFormData = {
    isim: "",
    phone: "",
    adress: "",
    types: " ",
    malzeme1: "",
    malzeme2: "",
    malzeme3: "",
    malzeme4: "",
    malzeme5: "",
    özel: "",
    siparisSayisi: "",
  };

  const [errors, ssetErrors] = useState({});
  const [isDisabled, setisDisabled] = useState(false);

  const changeHandler = (e) => {
    console.log("change triggered", e.target.name);
    console.log("event", e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    const newFormData = {
      ...formData, /// form datayı buna döktük

      [e.target.name]: e.target.value,
    };

    Yup.reach(kurallar, e.target.name) // yupa diyoruz ki onChangede işlediğin alanı al
      .validate(value) // değere göre validate et
      .then((valid) => {
        // eğer doğru ise
        setisDisabled(false); /// eğer doğru dönerse enable buton
        console.log("valid", valid); /// valid se doğru diye dön
      })
      .catch((err) => {
        setisDisabled(true); //hata yakalarsa hep disabled buton
        console.log("err", err); // hata varsa hataları yazdır

        const newErrors = {
          /// eğer bir hata varsa
          ...errors,
          [e.target.name]: err.errors[0],
        };
        ssetErrors(newErrors); /// error state attık bu işlemi hataları görmek için
      });

    setFormData(newFormData);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // butona bastığımızda gönderiyor
    console.log("submit triggered", formData);
  };

  const [formData, setFormData] = useState(inialFormData); // state oluşturuyoruz formdatayı burda tutuyoruz

  return (
    <>
      <SCForm id="pizza-form" onSubmit={submitHandler} data-cy="form-submit">
        <SCBox>
          <p>
            <SCLabel
              htmlFor="name-input"
              className="name--label"
              data-cy="isim-label"
            >
              Name:{" "}
            </SCLabel>
            <input
              id="name-input"
              name="isim"
              type="text"
              placeholder="name"
              value={formData.isim}
              onChange={changeHandler}
            />
            <SCError>
              <p>{errors.name}</p>
            </SCError>
          </p>
        </SCBox>
        <SCBox>
          <p>
            <SCLabel
              htmlFor="adress-input"
              className="name--label"
              data-cy="adres-label"
            >
              Adress:{" "}
            </SCLabel>
            <input
              id="adress-input"
              name="adress"
              type="text"
              value={formData.adress}
              placeholder="adress"
              onChange={changeHandler}
              data-cy="adres-input"
            />
          </p>
        </SCBox>
        <SCBox>
          <p>
            <SCLabel htmlFor="phone-input" data-cy="telefon-label">
              Phone:{" "}
            </SCLabel>
            <input
              id="phone-input"
              name="phone"
              type="text"
              placeholder="phone"
              value={formData.phone}
              onChange={changeHandler}
              data-cy="telefon-input"
            />
          </p>
        </SCBox>
        <SCBox>
          <p>
            <SCText>Hamur Seç*</SCText>
            <select
              id="typesOfPizza"
              name="types"
              onChange={changeHandler}
              value={formData.types}
              data-cy="typesOfPizza-input"
            >
              <option value="">Hamur Kalınlığı</option>
              <option value="small">İnce Kenarlı</option>
              <option value="medium">Normal</option>
              <option value="Bigger">Kalın Kenarlı</option>
            </select>
          </p>
        </SCBox>

        <SCBox>
          <SCText>
            Ek Malzemeler: <SCOptional>(Tercihe Bağlı)</SCOptional>
          </SCText>
          <p>
            {dataInput.map((m) => (
              <p>
                <input
                  id={m.id}
                  type="checkbox"
                  name="types"
                  checked={formData.types.includes(m.malzemeAdı)}
                  value={m.malzemeAdı}
                  onChange={changeHandler}
                />
                <SCChecked htmlFor={m.id}>{m.malzemeAdı}</SCChecked>
              </p>
            ))}
          </p>
        </SCBox>
        <SCBox>
          <SCLabel htmlFor="special-text">
            Sipariş Notu: <SCOptional></SCOptional>{" "}
          </SCLabel>
          <input
            id="special-text"
            name="özel"
            type="text"
            value={formData.özel}
            onChange={changeHandler}
            data-cy="özel-input"
            placeholder="Siparişine eklemek istediğin bir not var mı ?"
          />
        </SCBox>
        <SCBox>
          <SCLabel htmlFor="numberOfOrders" data-cy="özel-label">
            {" "}
          </SCLabel>
          <input
            id="numberOfOrders"
            name="siparisSayisi"
            type="number"
            onChange={changeHandler}
            data-cy="siparisSayisi-input"
          />
        </SCBox>
        <SCBox>
          <button type="submit" disabled={!isDisabled}>
            Sipariş Ver
          </button>
        </SCBox>
      </SCForm>
    </>
  );
};
export default Form;
