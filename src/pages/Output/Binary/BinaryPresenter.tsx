import React from "react";

interface IBinaryPresenterProps {
  label: number;
  value: Array<string>;
}

const BinaryPresenter: React.FC<IBinaryPresenterProps> = ({ label, value }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2">
      <div className="text-sm text-blue-500 flex justify-center items-center">
        {label}
      </div>
      <div></div>
      <div></div>
      <div></div>
      {value.map((val, i) => (
        <div
          className="text-xl text-blue-800 flex justify-center items-center"
          key={i}
        >
          {val}
        </div>
      ))}
    </div>
  );
};

export default BinaryPresenter;
