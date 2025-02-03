import React from "react";

function Done_div({ Check_img, Relode, thanyoutext }) {
  return (
    <>
      <div className="done_div">
        <img src={Check_img} alt="" />
        <h3>{thanyoutext}</h3>
        <p className="done_div_p">We’ve added your card details</p>
        <button onClick={Relode} className="continue_btn">
          Continue
        </button>
      </div>
    </>
  );
}

export default Done_div;
