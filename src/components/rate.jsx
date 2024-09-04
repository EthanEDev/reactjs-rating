import React, { useState } from "react";
import "./rate.css";
import Star from "./star";

export default function Rate({ title = "", defaultRate = 0, maxRate = 5 }) {
  // Create an array representing the star positions
  const array = [];
  for (let i = 1; i <= maxRate; i++) {
    array.push(i);
  }

  const [valueRate, setValueRate] = useState(defaultRate);  // State to keep track of the selected rating
  const [valueHover, setValueHover] = useState(0);  // State to track the rating being hovered over

  return (
    <>
      <div className="container">
        <div className="title">{title}</div>  {/* Display the title of the rating component */}
        <div className="rate">
          <div className="stars">
            {array.map((item, index) => (
              <Star
                state={
                  valueHover !== 0
                    ? valueHover >= item
                      ? 1  // Star is hovered over
                      : 0  // Star is not hovered over
                    : valueRate >= item
                    ? 2  // Star is selected
                    : 0  // Star is neither hovered nor selected
                }
                key={index}  // Unique key for each star
                onClick={() => setValueRate(item)}  // Set the rating on click
                onMouseEnter={() => setValueHover(item)}  // Highlight stars on hover
                onMouseLeave={() => setValueHover(0)}  // Remove highlight when not hovering
              />
            ))}
          </div>
          <div className="score">
            <span>{valueRate}</span>/{maxRate}  {/* Display the current rating and maximum rating */}
          </div>
        </div>
      </div>
    </>
  );
}
