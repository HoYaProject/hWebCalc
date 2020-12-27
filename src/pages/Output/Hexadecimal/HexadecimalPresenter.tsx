import React from "react";

interface IHexadecimalPresenterProps {
  value: Array<string>;
}

const HexadecimalPresenter: React.FC<IHexadecimalPresenterProps> = ({
  value,
}) => {
  return (
    <div className="grid grid-cols-4">
      {value.map((val, i) => (
        <div
          className="mt-4 text-xl text-blue-800 flex justify-center items-center"
          key={i}
        >
          {val}
        </div>
      ))}
    </div>
  );
};

export default HexadecimalPresenter;
