import React from "react";

interface IBinaryProps {
  result: string;
}

const Binary: React.FC<IBinaryProps> = ({ result }) => {
  return <div className="text-4xl text-blue-800">{result}</div>;
};

export default Binary;
