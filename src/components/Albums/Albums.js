import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Search from "../Search";
import Album from "./Album";

const Albums = () => {
  const [album, setAlbum] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABEY}&q=${
        searchTerm ? searchTerm : "yellow+flowers"
      }&image_type=photo`
    )
      .then((response) => response.json())
      .then((data) => {
        setAlbum(data.hits);
      });
  }, [searchTerm]);
  return (
    <div className="container">
      <Search searchTerm={(text) => setSearchTerm(text)} />
      <p className="text-align">Click an Album To Download</p>

      <div className="albums">
        {album.length === 0 ? (
          <h1 className="text-align">Loading...</h1>
        ) : (
          <>
            {album.map((photo) => {
              return (
                <div key={photo.id}>
                  <Album photo={photo} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Albums;
