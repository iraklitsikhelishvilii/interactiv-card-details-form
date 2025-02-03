import React from "react";

function Card_back({ Cvc, img }) {
  return (
    <>
      <div className="card_back">
        <div className="black_div"></div>
        <div className="cvc_div">
          <p className="cvc_p">{Cvc || "000"}</p>
        </div>
        <img className="img1" src={img} alt="Card logo" />
      </div>
    </>
  );
}

export default Card_back;
