import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/images/arrow (1).png";
import arrow_black from "../../assets/images/arrow_black.png";

const BackButton = ({ darkMode }) => {
  const navigate = useNavigate();
  return (
    <button
      className={"flex items-center  left-12 pt-5"}
      style={{ zIndex: 111 }}
      onClick={() => navigate(-1)}
    >
      <img
        src={darkMode ? arrow_black : backIcon}
        alt={""}
        style={{ width: 20, height: 20 }}
      />
      <p
        className={`pl-3 text-${
          darkMode ? "dark" : "light"
        }  font-Kanit l:text-s sm:text-xxs `}
        style={{ fontWeight: "200" }}
      >
        BACK
      </p>
    </button>
  );
};

export default BackButton;
