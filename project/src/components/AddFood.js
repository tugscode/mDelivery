import React, { useState } from "react";
import "../css/addfood.css";
import {addItem} from "../services/basketService";

const AddFood = (props) => {
  const [count, setCount] = useState(1);
  const [portion, setPortionSize] = useState(1);
  const [activeButton, setActiveButton] = useState("add1");
  const [isLoading , setIsLoading] = useState(true)

  const handlePortion = (size) => {
    setPortionSize(() => size);
  };
  const itemAdder = () => {
    addItem({
      count: count,
      food_id: props.data._id,
    });
  };

  const handleCounter = (num) => {
    setCount((count) => (count > 0 ? (count += num) : (count = 1)));
  };
 

  return (
    <div className="add-food">
      <div>
        <h5 className="modalHeader">Хэмжээ</h5>
        <div className="modalSizeButtons">
          <button
            id="add1"
            className={`sizeButton ${activeButton === "add1" ? "activeButton" : ""
              }`}
            onClick={(event) => {
              setActiveButton("add1");
              handlePortion(1);
            }}
          >
            1 хүн
          </button>
          <button
            id="add2"
            className={`sizeButton ${activeButton === "add2" ? "activeButton" : ""
              }`}
            onClick={(event) => {
              setActiveButton("add2");
              handlePortion(2);
            }}
          >
            2 хүн
          </button>
        </div>
      </div>

      <h5 className="modalHeader">Тоо</h5>
      <div className="modalCounterButtons">
        <button className="counterButton" onClick={() => handleCounter(-1)}>
          -
        </button>
        <p className="counterNumber "> {count} </p>
        <button className="counterButton" onClick={() => handleCounter(1)}>
          +
        </button>
      </div>
      <button className="orderButton" onClick={itemAdder}> Захиалах</button>
    </div>
  );
};

export default AddFood;
