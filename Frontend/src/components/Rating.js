import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";

function Rating({ ratings }) {
  useEffect(() => {}, [ratings]);
  return (
    <div className="flex flex-wrap gap-1 text-yellow-700">
      {[0, 1, 2, 3, 4].map((index) => (
        <FaStar key={index} />
      ))}
    </div>
  );
}

export default Rating;
