import React, { useState } from "react";
import Check_img from "../../../assets/images/Group9.svg";
import Form_section from "../Form_section/Form_section";
import Main_div from "../../__molecules/Main_div/Main_div";
function Main() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");
  const [Cvc, setCvc] = useState("");
  const [submited, setsubmited] = useState(false);
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
      setsubmited(true);
    }
  };
  const Relode = () => {
    window.location.reload();
  };
  return (
    <>
      <Main_div
        cardholderName={cardholderName}
        Cvc={Cvc}
        MM={MM}
        YY={YY}
        cardNumber={cardNumber}
      />

      <Form_section
        submited={submited}
        submit={submit}
        cardholderName={cardholderName}
        CardholderNameChange={CardholderNameChange}
        cardNumber={cardNumber}
        CardNumberChange={CardNumberChange}
        validationerror={validationerror}
        MM={MM}
        MmChange={MmChange}
        YyChange={YyChange}
        YY={YY}
        Cvc={Cvc}
        CvcChange={CvcChange}
        Relode={Relode}
        Check_img={Check_img}
      />
    </>
  );
}

export default Main;
