import React from "react";
import InputMask from "react-input-mask";
function Cvc_input({ Cvc, CvcChange }) {
  return (
    <>
      <InputMask
        value={Cvc}
        onChange={CvcChange}
        id="CVC"
        type="text"
        placeholder="e.g. 123"
        mask="999"
        maskChar=""
      />
    </>
  );
}

export default Cvc_input;
