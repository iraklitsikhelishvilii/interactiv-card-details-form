import "./App.css";

import Main from "./components/__organisms/Main/Main";

function App() {
 

  return (
    <>
      <div className="conteiner">
        <Main />
        {/* {!submited ? (
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
        ) : (
          <div className="done_div">
            <img src={Check_img} alt="" />
            <h3>THANK YOU!</h3>
            <p className="done_div_p">We’ve added your card details</p>
            <button onClick={Relode} className="continue_btn">
              Continue
            </button>
          </div>
        )} */}
      </div>
    </>
  );
}

export default App;
