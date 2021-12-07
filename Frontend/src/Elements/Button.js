import React from "react";

function Button(prop) {
  let color = "";
  switch (prop.color) {
    case "primary":
      color += "bg-deep-purple-accent-400";
      break;
    case "secondary":
      color += "bg-teal-400";
      break;
    default:
      color = "";
      break;
  }
  return (
    <button type={`${prop.type}`} className={`flex p-4 ${color} ${prop.class}`} onClick={prop.click}>
      {prop.children}
    </button>
  );
}

export default Button;
