import React from "react";

interface IDecimalProps {
  result: number;
}

const Decimal: React.FC<IDecimalProps> = ({ result }) => {
  return <div className="my-4 text-6xl text-blue-900">{result}</div>;
};

export default Decimal;
