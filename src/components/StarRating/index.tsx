import { useState } from "react";
import { Star } from "./Star";

const StartRating = ({ ammount }: { ammount: number }) => {

  const [starsActive, setStarsActive] = useState(new Array(ammount).fill(false));
  const STARS = new Array(ammount);


  function handleActive(n: number) {
    
    setStarsActive(() => {
      const active = new Array(STARS.length).fill(false);
      for (let i=0; i<= n; i++) {
        active[i] = true;
      }
      return active;
    });

  };

  for (let i = 0; i < STARS.length; i++) {
    STARS[i] = <Star active={starsActive[i]} onClick={() => handleActive(i)} />;
  }


  return <div className="wrapper">{STARS}</div>;
};
export default StartRating;
