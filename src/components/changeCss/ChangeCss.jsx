import { useState } from "react";
import "./changecss.css";
export default function ChangeCss() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(false);
  };
  const handleClickImg = (e) => {
    e.stopPropagation();
    setActive(true);
  };
  return (
    <div
      onClick={handleClick}
      className={`${active ? `background` : `background background--active`}`}
    >
      <img
        className={`${active ? "picture picture--active" : "picture"}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handleClickImg}
      />
    </div>
  );
}
