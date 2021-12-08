import React, { useRef } from "react";

function Input(prop) {
  const inputRef = useRef("");
  return (
    <div className="flex flex-row justify-center flex-1 relative">
      <input
        ref={inputRef}
        type={prop.type ? prop.type : "type"}
        placeholder={prop.placeholder ? prop.placeholder : ""}
        onKeyDown={(e) => {
          if (e.code === "Enter" && prop.click) {
            e.preventDefault();
            prop.click(inputRef.current.value);
          }
        }}
        className={`rounded-l-xl w-full
         py-2
         px-4
         border
       border-gray-200
         max-w-2xl
         transition duration-200
         focus:outline-none   
         focus:shadow-sm
         border-r-0
         `}
      />
      {prop.icon && (
        <button
          onClick={() => prop.click(inputRef.current.value)}
          className="text-white bg-white rounded-r-xl px-2  border
          border-gray-200 border-l-0"
        >
          <img src={prop.icon_url} alt="input icon" className="w-8" />
        </button>
      )}
    </div>
  );
}

export default Input;
