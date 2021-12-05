import React from "react";

function Button(prop) {
  let color = "";
  switch (prop.color) {
    case "primary":
      color += "bg-blue-700";
      break;
    case "secondary":
      color += "bg-green-400";
      break;
    default:
      color = "";
      break;
  }
  return (
    <button className={`flex p-4 ${color} ${prop.class}`} onClick={prop.click}>
      {prop.children}
    </button>
  );
}

export default Button;
