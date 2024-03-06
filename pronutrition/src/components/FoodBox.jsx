import React, { useState } from "react";

function FoodBox(props) {
  let { data, index } = props;
  console.log(data);
  console.log(index);
  let { cal, name, img, id } = data;

  const [count, setCount] = useState(0);
  const [qty, setQty] = useState(0);
  const qtyHandler = () => {
    setQty(count);
    console.log(qty);
  };

  return (
    <div className="foodbox-main" key={index}>
      <div className="foodbox-main-left">
        <img src={img} alt="" />
        <div className="foodbox-main-left-1">
          <h3>{name}</h3>
          <p>{cal}</p>
        </div>
        <div className="foodbox-main-left-2">
          <input
            type="number"
            min={0}
            max={10}
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <button onClick={qtyHandler}>+</button>
        </div>
      </div>
      <div className="foodbox-main-right">
        <h4>
          {name} × {qty} = {cal * qty} Calories
        </h4>
        <button
          id="reset"
          onClick={(() => {
            setQty(0);
            setCount(0);
          })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default FoodBox;
