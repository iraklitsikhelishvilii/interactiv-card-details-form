import React from "react";
import InputMask from "react-input-mask";
function Number_input({ cardNumber, CardNumberChange }) {
  return (
    <>
      <InputMask
        id="Card_Number"
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        value={cardNumber}
        onChange={CardNumberChange}
        mask="9999 9999 9999 9999"
      />
    </>
  );
}

export default Number_input;
