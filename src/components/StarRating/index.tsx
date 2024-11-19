import { Star } from "./Star";

const StartRating = ({ ammount }: { ammount: number }) => {
  const STARS = new Array(ammount);
  for (let i = 0; i <= ammount; i++) {
    STARS[i] = <Star />
  }
  return (
    <div className="wrapper">
      {STARS}
    </div>
  )
};
export default StartRating;
