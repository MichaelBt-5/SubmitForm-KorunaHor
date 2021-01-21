import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Input-Wrap"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      onKeyPress={hideTip}
    >
     
      {props.children}
      {active && (
        <span className={`Tooltip-image ${props.direction || "right"}`}>
         
          <img className='Image' src={props.image} alt='noimage'/>
         
        </span>
      )}
    </div>
  );
};

export default Tooltip;
