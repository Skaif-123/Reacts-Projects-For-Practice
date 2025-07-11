import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function ({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
    // ===============functions======================
    function handleOnClick(index) {
      setRating(index);
      console.log(" for onClick",index);
      
    };
    function handleMouseMove(index) {
        setHover(index);
        console.log("for mousemove",index);
  }

  function handleMouseLeave() {
   setHover(rating);
  }

  return (
    <div className="starRating">
      {[...Array(noOfStars)].map(
        (_, index) => {

         index = index + 1;
            return(

                <FaStar
                key={index}
                className={(index) <= (hover|| rating) ? "active" : "inactive"}
                onClick={() => handleOnClick(index)}
                onMouseMove={() => handleMouseMove(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
                />
            )
    }
    )}
    </div>
  );
}
