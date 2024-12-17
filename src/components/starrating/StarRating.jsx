import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ number }) => {
    const [rating,setRating] = useState(0);
    const [hover,SetHover] = useState(0);
    function handleMouseLeave() {
        SetHover(rating);
      }

    function handleOnEnter(index){
        SetHover(index);
    }
    function selectRating(index){
      setRating(index);
      console.log(rating)

    }

  return [...Array(number)].map((_, index) => {
    index += 1;
    return <FaStar onClick={()=>selectRating(index)} onMouseLeave={()=>handleMouseLeave(index)} onMouseMove={()=>handleOnEnter(index)} key={index} className={index <= (hover || rating) ? "active" : "inactive"} size={40} />;
  });
};

export default StarRating;
