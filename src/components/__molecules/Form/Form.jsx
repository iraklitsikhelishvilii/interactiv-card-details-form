import React from "react";
import Name_input from "../../__atoms/Name_input/Name_input";
import Number_input from "../../__atoms/Number_input/Number_input";
import Mm_input from "../../__atoms/mm_input/Mm_input";
import Yy_input from "../../__atoms/YY_input/Yy_input";
import Cvc_input from "../../__atoms/CVC_input/Cvc_input";
function Form({
  cardholderName,
  CardholderNameChange,
  validationerror,
  cardNumber,
  CardNumberChange,
  MM,
  MmChange,
  YyChange,
  YY,
  Cvc,
  CvcChange,
  submit,
}) {
  return (
    <>
      <form onSubmit={submit}>
        <div className="Cardholder_Name_box">
          <label className="Cardholder_Name_l" htmlFor="Cardholder_Name">
            Cardholder Name
          </label>
          <Name_input
            cardholderName={cardholderName}
            CardholderNameChange={CardholderNameChange}
          />
          {validationerror.cardname === true && (
            <p className="error">Wrong format, letters only</p>
          )}
        </div>
        <div className="Card_Number_box">
          <label className="Card_Number_l" htmlFor="Card_Number">
            Card Number
          </label>
          <Number_input
            cardNumber={cardNumber}
            CardNumberChange={CardNumberChange}
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
              <Mm_input MM={MM} MmChange={MmChange} />
              <Yy_input YyChange={YyChange} YY={YY} />
            </div>
            {validationerror.expdate && <p className="error">Can’t be blank</p>}
          </div>
          <div className="cvc_box">
            <label className="cvc_l" htmlFor="CVC">
              CVC
            </label>
            <Cvc_input Cvc={Cvc} CvcChange={CvcChange} />
            {validationerror.cvc && <p className="error">Can’t be blank</p>}
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}

export default Form;
