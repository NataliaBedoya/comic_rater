import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getComicInfo } from "../store/reducer";
import button from "../assets/images/nextImage.png";

function Button() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(getComicInfo());
  };

  return (
    <div>
      <div>
        <Link onClick={handleChange} className="buttonNext">
          <img className="imgbutton" src={button} alt="Button" />
        </Link>
      </div>
    </div>
  );
}

export default Button;
