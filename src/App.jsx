import React, { useState } from "react";
import "./App.css";
import img from "../src/assets/images/Group15.svg";
import InputMask from "react-input-mask";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");
  const [Cvc, setCvc] = useState("");
  const CardNumberChange = (event) => {
    const value = event.target.value;
    setCardNumber(value);
  };

  const CardholderNameChange = (event) => {
    const value = event.target.value;
    setCardholderName(value);
  };
  const MmChange = (event) => {
    const value = event.target.value;
    setMM(value);
  };
  const YyChange = (event) => {
    const value = event.target.value;
    setYY(value);
  };
  const CvcChange = (event) => {
    const value = event.target.value;
    setCvc(value);
  };

  const [validationerror, setvalidationerror] = useState({
    cardname: false,
    cardNumber: false,
    expdate: false,
    cvc: false,
  });

  const validation = () => {
    const cleanedCardNumber = cardNumber.replace(/\s+/g, "");

    let cardNameValid = true;
    if (cardholderName === "" || !isNaN(cardholderName)) {
      cardNameValid = false;
    }

    let cardNumberValid = true;
    if (
      isNaN(cleanedCardNumber) ||
      cleanedCardNumber === "" ||
      cleanedCardNumber.length !== 16
    ) {
      cardNumberValid = false;
    }

    let expirationDateValid = true;
    if (MM === "" || YY === "" || MM < 1 || MM > 12 || YY.length !== 2) {
      expirationDateValid = false;
    }

    let cvcValid = true;
    if (Cvc === "" || Cvc.length !== 3 || isNaN(Cvc)) {
      cvcValid = false;
    }

    if (
      !cardNameValid ||
      !cardNumberValid ||
      !expirationDateValid ||
      !cvcValid
    ) {
      setvalidationerror({
        cardname: !cardNameValid,
        cardNumber: !cardNumberValid,
        expdate: !expirationDateValid,
        cvc: !cvcValid,
      });
      return false;
    } else {
      setvalidationerror({
        cardname: false,
        cardNumber: false,
        expdate: false,
        cvc: false,
      });
      return true;
    }
  };

  const submit = (event) => {
    event.preventDefault();
    if (validation()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <div className="conteiner">
        <div className="main_div">
          <div className="colors_div">
            <div className="blur_color_div1"></div>
            <div className="blur_color_div2"></div>
            <div className="blur_color_div3"></div>
          </div>
          <div className="cards_div">
            <div className="card_front">
              <div className="blur_color1"></div>
              <div className="blur_color2"></div>
              <div className="blur_color3"></div>
              <div className="avatar_box">
                <div className="avatar_img_box"></div>
                <div className="circle_div"></div>
              </div>
              <p className="card_front_numbers_p">
                {cardNumber || "0000 0000 0000 0000"}
              </p>
              <div className="card_front_bottom_div">
                <p className="card_info_p">
                  {cardholderName || "JANE APPLESEED"}
                </p>
                <p className="card_info_p">
                  <p className="card_info_p">
                    {(MM || "00") + "/" + (YY || "00")}
                  </p>
                </p>
              </div>
            </div>
            <div className="card_back">
              <div className="black_div"></div>
              <div className="cvc_div">
                <p className="cvc_p">{Cvc || "000"}</p>
              </div>
              <img className="img1" src={img} alt="Card logo" />
            </div>
          </div>
        </div>
        <form onSubmit={submit}>
          <div className="Cardholder_Name_box">
            <label className="Cardholder_Name_l" htmlFor="Cardholder_Name">
              Cardholder Name
            </label>
            <input
              id="Cardholder_Name"
              type="text"
              placeholder="e.g. Jane Appleseed"
              value={cardholderName}
              onChange={CardholderNameChange}
            />
            {validationerror.cardname === true && (
              <p className="error">Wrong format, letters only</p>
            )}
          </div>
          <div className="Card_Number_box">
            <label className="Card_Number_l" htmlFor="Card_Number">
              Card Number
            </label>
            <InputMask
              id="Card_Number"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              value={cardNumber}
              onChange={CardNumberChange}
              mask="9999 9999 9999 9999"
            />
            {validationerror.cardNumber === true && (
              <p className="error">Wrong format, numbers only</p>
            )}
          </div>
          <div className="date_cvc_box">
            <div className="date_cvc_box_minor">
              <label className="date_cvc_l" htmlFor="">
                Exp. Date (MM/YY)
              </label>
              <div className="date_cvc_input_box">
                <InputMask
                  value={MM}
                  onChange={MmChange}
                  className="MM_input"
                  type="text"
                  placeholder="MM"
                  mask="99"
                  maskChar=""
                />
                <InputMask
                  onChange={YyChange}
                  value={YY}
                  className="yy_input"
                  type="text"
                  mask="99"
                  maskChar=""
                  placeholder="YY"
                />
              </div>
              {validationerror.expdate && (
                <p className="error">Can’t be blank</p>
              )}
            </div>
            <div className="cvc_box">
              <label className="cvc_l" htmlFor="CVC">
                CVC
              </label>
              <InputMask
                value={Cvc}
                onChange={CvcChange}
                id="CVC"
                type="text"
                placeholder="e.g. 123"
                mask="999"
                maskChar=""
              />
              {validationerror.cvc && <p className="error">Can’t be blank</p>}
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </div>
    </>
  );
}

export default App;
