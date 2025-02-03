import React from "react";
import "../Main_div/Main_div.css";
import img from "../../../assets/images/Group15.svg";
import Card_front from "../card_front/Card_front";
import Card_back from "../card_back/Card_back";
function Main_div({ cardNumber, cardholderName, Cvc, MM, YY }) {
  return (
    <>
      <div className="main_div">
        <div className="cards_div">
          <Card_front
            cardNumber={cardNumber}
            cardholderName={cardholderName}
            MM={MM}
            YY={YY}
          />
          <Card_back img={img} Cvc={Cvc} />
        </div>
      </div>
    </>
  );
}
export default Main_div;
