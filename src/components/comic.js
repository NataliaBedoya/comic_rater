import React from "react";
import { useSelector } from "react-redux";

function Comic() {
  const { comic } = useSelector((state) => {
    return {
      comic: state.reducer.comic,
    };
  });

  return (
    <div>
      <div className="comic-title">
        <h1>{comic.title}</h1>
      </div>
      <div className="comic-img">
        <img alt={comic.transcript} src={comic.img} />
      </div>
    </div>
  );
}

export default Comic;
