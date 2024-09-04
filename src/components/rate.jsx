import React, { useState } from "react";
import "./rate.css";
import Star from "./star";

export default function Rate({ title = "", defaultValue = 0, maxValue = 5 }) {
  const array = [];
  for (let i = 1; i <= maxValue; i++) {
    array.push(i);
  }

  const [valueRate, setValueRate] = useState(defaultValue);
  const [valueHover, setValueHover] = useState(0);

  return (
    <>
      <div className="container">
        <div className="title">{title}</div>
        <div className="rate">
          <div className="stars">
            {array.map((item, index) => (
              <Star
                state={
                  valueHover !== 0
                    ? valueHover >= item
                      ? 1
                      : 0
                    : valueRate >= item
                    ? 2
                    : 0
                }
                key={index}
                onClick={() => setValueRate(item)}
                onMouseEnter={() => setValueHover(item)}
                onMouseLeave={() => setValueHover(0)}
              />
            ))}
          </div>
          <div className="score">
            <span>{valueRate}</span>/{maxValue}
          </div>
        </div>
      </div>
    </>
  );
}
