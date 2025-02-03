import React from "react";
import InputMask from "react-input-mask";
function Yy_input({ YyChange, YY }) {
  return (
    <>
      <InputMask
        onChange={YyChange}
        value={YY}
        className="yy_input"
        type="text"
        mask="99"
        maskChar=""
        placeholder="YY"
      />
    </>
  );
}

export default Yy_input;
