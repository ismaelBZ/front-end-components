import { MdOutlineStar } from "react-icons/md";

function Star({ active, onClick }: { active: boolean[], onClick: React.MouseEventHandler }) {
  return (
    <>
      <MdOutlineStar
        id="1"
        className={`star ${active ? "active" : "inactive"}`}
        onClick={onClick}
      />
    </>
  );
}

export { Star };
