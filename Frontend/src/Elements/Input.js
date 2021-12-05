import React from "react";

function Input(prop) {
  return (
    <div className="flex flex-row justify-center flex-1 relative">
      <input
        type={prop.type ?? "type"}
        placeholder={prop.placeholder ?? ''}
        className={`rounded-l-xl w-full
         py-2
         px-4
         shadow-sm
         max-w-2xl focus:outline-none
         `}
      />
      {prop.icon && (
        <button className="text-white bg-white rounded-r-xl px-2 shadow-sm">
          <img src={prop.icon_url} alt="input icon" className="w-8" />
        </button>
      )}
    </div>
  );
}

export default Input;
