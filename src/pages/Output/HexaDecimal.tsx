import React from "react";

interface IHexaDecimalProps {
  result: number;
}

const HexaDecimal: React.FC<IHexaDecimalProps> = ({ result }) => {
  return <div className="text-4xl text-blue-800">{result}</div>;
};

export default HexaDecimal;
