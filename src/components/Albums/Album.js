import React from "react";

const Album = ({ photo: { largeImageURL, id } }) => {
  return (
    <div className="album">
      <img src={largeImageURL} alt={id} />
    </div>
  );
};

export default Album;
