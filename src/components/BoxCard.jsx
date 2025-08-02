import React, { Children, useState } from "react";
import "./BoxCard.css";
const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`box ${result}`}>
        {children}
        <button onClick={() => setShow(!show)} className="trigger">
          Hide
        </button>
      </div>
    </div>
  );
};

export default BoxCard;
