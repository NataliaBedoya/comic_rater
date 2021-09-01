import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Comic from "../components/comic";
import Rating from "../components/rating";
import Button from "../components/button";

import { getComicInfo } from "../store/reducer";
import "../styles/MainView.css";

function MainView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComicInfo());
  });

  return (
    <div className="MainView-InfoBlock">
      <div className="ComicBlock">
        <Comic />
      </div>
      <div className="RatingBlock">
        <Rating />
      </div>
      <div className="ButtonBlock">
        <Button />
      </div>
    </div>
  );
}

export default MainView;
