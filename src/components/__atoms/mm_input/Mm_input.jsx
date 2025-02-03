import React from "react";
import InputMask from "react-input-mask";
function Mm_input({ MM, MmChange }) {
  return (
    <>
      <InputMask
        value={MM}
        onChange={MmChange}
        className="MM_input"
        type="text"
        placeholder="MM"
        mask="99"
        maskChar=""
      />
    </>
  );
}

export default Mm_input;
