import React from "react";
import { useDispatch } from "react-redux";
import { getComicInfo } from "../store/reducer";

function Button() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(getComicInfo());
  };

  return (
    <div className="Button">
      <button classname="buttonNext" onClick={handleChange}>
        Next
      </button>
    </div>
  );
}

export default Button;
