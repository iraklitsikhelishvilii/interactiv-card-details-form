import Btn from "../../__atoms/Btn/Btn";
import Card_Number from "../../__atoms/Card_Number/Card_Number";
import Cardholder_Name from "../../__atoms/Cardholder_Name/Cardholder_Name";
import Cvc_input from "../../__atoms/CVC_input/Cvc_input";
import Mm_input from "../../__atoms/mm_input/Mm_input";
import Yy_input from "../../__atoms/YY_input/Yy_input";
import "../Form/Form.css";
import React from "react";
function Form() {
  return (
    <>
      <form>
        <Cardholder_Name />
        <Card_Number />
        <div className="date_cvc_box">
          <div className="date_cvc_box_minor">
            <label className="dare_cvc_l" htmlFor="">
              Exp. Date (MM/YY)
            </label>
            <div className="date_cvc_input_box">
              <Mm_input />
              <Yy_input />
            </div>
          </div>
          <Cvc_input />
        </div>
        <Btn />
      </form>
    </>
  );
}
export default Form;
