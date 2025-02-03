import React from "react";
import Form from "../../__molecules/Form/Form";
import Done_div from "../../__molecules/Done_div/Done_div";
function Form_section({
  submited,
  submit,
  cardholderName,
  CardholderNameChange,
  cardNumber,
  CardNumberChange,
  validationerror,
  MM,
  MmChange,
  YyChange,
  YY,
  Cvc,
  CvcChange,
  Relode,
  Check_img,
}) {
  return (
    <>
      {!submited ? (
        <Form
          cardholderName={cardholderName}
          CardholderNameChange={CardholderNameChange}
          validationerror={validationerror}
          cardNumber={cardNumber}
          CardNumberChange={CardNumberChange}
          MM={MM}
          MmChange={MmChange}
          YyChange={YyChange}
          YY={YY}
          Cvc={Cvc}
          CvcChange={CvcChange}
          submit={submit}
        />
      ) : (
        <Done_div
          thanyoutext="THANK YOU!"
          Check_img={Check_img}
          Relode={Relode}
        />
      )}
    </>
  );
}

export default Form_section;
