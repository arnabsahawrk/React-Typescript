import React from "react";
import { User } from "../App";

const ButtonStyle = ({
  btnStyle,
  setUser,
}: {
  btnStyle: React.CSSProperties;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}) => {
  const handleClick = () => {
    setUser({ id: 1, name: "Arnab Saha" });
  };

  return (
    <div>
      <button onClick={handleClick} style={btnStyle}>
        Click Me
      </button>
    </div>
  );
};

export default ButtonStyle;
