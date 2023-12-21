import { useState, useContext } from "react";
import { places } from "./data";
import { getImageUrl } from "./utils";
import { SizeContext } from "./Context";

export default function ListImages() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <SizeContext.Provider value={imageSize}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </div>
    </SizeContext.Provider>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id} className="flex items-center my-2 gap-4">
      <Place place={place} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(SizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
