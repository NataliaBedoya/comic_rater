import React from "react";
import { useSelector } from "react-redux";

function Comic() {
  const { comic } = useSelector((state) => {
    return {
      comic: state.reducer.comic,
    };
  });

  return (
    <div className="Comics">
      <h1 className="comic-title">{comic.title}</h1>
      <img className="comic-img" alt={comic.transcript} src={comic.img} />
    </div>
  );
}

export default Comic;
