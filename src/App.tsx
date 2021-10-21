import React, { useEffect, useState } from "react";
import "./App.css";
import Pagination from "@mui/material/Pagination";
import { PhotoThumbNail } from "./componets/PhotoTumbNail";

function App() {
  const pageSize = 5;

  const [pageIndex, setPageIndex] = useState(1);
  const [albumId, setAlbumId] = useState(3);

  const [photos, setPhotos] = useState([
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((obj) => setPhotos(obj));
  }, []);

  const getDisplayedPhotos = () => {
    const filter = albumId > 0;
    if (filter)
      return photos.filter(
        (photo: { albumId: number }) => photo.albumId === albumId
      );
    return photos;
  };

  const Photos = ({
    pageIndex,
  }: {
    pageIndex: number;
  }): JSX.Element => (
    <>
      {getDisplayedPhotos().map((photo, index: number) => {
        if (
          getDisplayedPhotos().indexOf(photo) >= (pageIndex - 1) * pageSize &&
          getDisplayedPhotos().indexOf(photo) < pageIndex * pageSize
        )
          return (
            <PhotoThumbNail photo={photo} setPhotos={setPhotos} index={index} />
          );
          else return null
      })}
    </>
  );

  return (
    <div className="App">
      <input
        type="number"
        value={albumId}
        onChange={(e) => setAlbumId(parseInt(e.target.value, 10))}
      />
      <div className="wrapperCard">
        <Photos pageIndex={pageIndex}/>
      </div>
      <Pagination
        onChange={(_, num) => {
          setPageIndex(num);
        }}
        count={Math.floor(getDisplayedPhotos().length / pageSize)}
        variant="outlined"
      />
    </div>
  );
}

export default App;
