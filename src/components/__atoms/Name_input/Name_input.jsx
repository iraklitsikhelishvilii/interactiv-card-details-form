import React from "react";

function Name_input({ cardholderName, CardholderNameChange }) {
  return (
    <>
      <input
        id="Cardholder_Name"
        type="text"
        placeholder="e.g. Jane Appleseed"
        value={cardholderName}
        onChange={CardholderNameChange}
      />
    </>
  );
}

export default Name_input;
