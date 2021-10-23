import React from "react";
import Counter from "../Components/Counter";
import Timer from "../Components/Timer";
import Input from "../Components/Input";
import { useTheme } from "../Context/ThemeContext";

const Test = () => {
  const { theme, setLight, setDark } = useTheme();
  return (
    <div className="test" style={theme}>
      <Counter />
      <Timer />
      <div className="theme-button">
        <button
          className="toggle-theme"
          onClick={() =>
            theme.backgroundColor === "white" ? setDark() : setLight()
          }
        >
          Toggle Theme
        </button>
      </div>
      <Input />
    </div>
  );
};

export default Test;
