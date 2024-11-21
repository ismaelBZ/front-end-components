import { MdOutlineStar } from "react-icons/md";

function Star({
  active,
  onClick,
}: {
  active: boolean[];
  onClick: React.MouseEventHandler;
}) {
  return (
    <>
      <MdOutlineStar
        id="1"
        className={`star-rating-star ${
          active ? "star-rating-active" : "star-rating-inactive"
        }`}
        onClick={onClick}
      />
    </>
  );
}

export { Star };
