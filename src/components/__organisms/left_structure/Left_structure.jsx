import Card_back from "../../__molecules/card_back/Card_back";
import Card_front from "../../__molecules/card_front/Card_front";
import Form from "../../__molecules/Form/Form";
import "../left_structure/Left_structure.css";
import React from "react";

function Left_structure() {
  return (
    <>
      <div className="conteiner">
        <div className="main_div">
          <div className="colors_div">
            <div className="blur_color_div1"></div>
            <div className="blur_color_div2"></div>
            <div className="blur_color_div3"></div>
          </div>
          <div className="cards_div">
            <Card_front />
            <Card_back />
          </div>
        </div>
        <Form />
      </div>
    </>
  );
}
export default Left_structure;
