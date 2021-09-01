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
    <div className="MainView">
      <div className="MainView-InfoBlock">
        <Comic />
        <Rating />
        <h1>{/* <Button /> */}</h1>
      </div>
    </div>
  );
}

export default MainView;
