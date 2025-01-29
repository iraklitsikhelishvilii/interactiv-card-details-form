import "../card_back/Card_back.css";
import React from "react";
import img from "../../../assets/images/Group15.svg";
function Card_back() {
  return (
    <>
      <div className="card_back">
        <div className="black_div"></div>
        <div className="cvc_div">
          <p className="cvc_p">000</p>
        </div>
        <img className="img1" src={img} alt="" />
      </div>
    </>
  );
}
export default Card_back;
