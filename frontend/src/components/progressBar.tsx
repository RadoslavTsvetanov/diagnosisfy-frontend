import React from "react";

export const ProgressBar: React.FC<{fill: number}> = ({ fill }) => {
  console.log(fill)
  return (
    <div className="h-8 w-full overflow-hidden rounded bg-red-500">
      <div className="h-full bg-blue-500 flex justify-between" style={{ width: `${fill}%` }}><p>Yes</p></div>
    </div>
  );
};
