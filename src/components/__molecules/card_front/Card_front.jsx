import React from "react";

function Card_front({ cardNumber, cardholderName, MM, YY }) {
  return (
    <>
      <div className="card_front">
        <div className="avatar_box">
          <div className="avatar_img_box"></div>
          <div className="circle_div"></div>
        </div>
        <p className="card_front_numbers_p">
          {cardNumber || "0000 0000 0000 0000"}
        </p>
        <div className="card_front_bottom_div">
          <p className="card_info_p">{cardholderName || "JANE APPLESEED"}</p>

          <p className="card_info_p">{(MM || "00") + "/" + (YY || "00")}</p>
        </div>
      </div>
    </>
  );
}

export default Card_front;
