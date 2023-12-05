import { useState } from "react";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

export const useRandomColors = () => {
  const [color, setColor] = useState("#000");

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return {
    color,
    changeColor,
  };
};
