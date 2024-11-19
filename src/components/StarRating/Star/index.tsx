import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";

function Star() {
  const [active, setActive] = useState(false);

  return (
    <>
      <>
        <MdOutlineStar
          id="1"
          className={`star ${active ? "active" : "inactive"}`}
          onClick={() =>
            active ? setActive(() => false) : setActive(() => true)
          }
        />
      </>
    </>
  );
}

export {Star};
