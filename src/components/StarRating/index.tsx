import { useState } from "react";
import { Star } from "./Star";
import "./styles.css";

const MESSAGES = [
  {
    stars: 1,
    message:
      "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  },
  {
    stars: 2,
    message:
      "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  },
  {
    stars: 3,
    message:
      "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  },
  {
    stars: 4,
    message:
      "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  },
  {
    stars: 5,
    message:
      "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
  },
];

const StartRating = ({ ammount }: { ammount: number }) => {
  const [starsActive, setStarsActive] = useState(
    new Array(ammount).fill(false)
  );
  const [message, setMessage] = useState<null | string>(null);
  const STARS = new Array(ammount);

  function handleActive(n: number) {
    setStarsActive(() => {
      const active = new Array(STARS.length).fill(false);
      for (let i = 0; i <= n; i++) {
        active[i] = true;
      }
      return active;
    });

    setMessage(() => MESSAGES[n].message);
  }

  for (let i = 0; i < STARS.length; i++) {
    STARS[i] = <Star active={starsActive[i]} onClick={() => handleActive(i)} />;
  }

  return (
    <div className="star-rating-wrapper">
      <h2 className="star-rating-title">
        How many stars would you give to us?
      </h2>
      <div className="star-rating-stars-wrapper">{STARS}</div>
      <p className="star-rating-message">{message}</p>
    </div>
  );
};
export default StartRating;
