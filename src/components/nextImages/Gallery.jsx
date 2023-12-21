import { useState } from "react";
import { images } from "./images";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <button
        className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        Next
      </button>
      <h3>
        Image {index + 1} of {images.length}
      </h3>
      <div className="flex justify-center items-center">
        <img
          key={image.src}
          src={image.src}
          className="w-40 h-40"
          alt={image.place}
        />
      </div>
      <p>{image.place}</p>
    </div>
  );
}
