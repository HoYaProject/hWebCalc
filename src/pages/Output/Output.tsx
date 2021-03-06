import React from "react";
import Binary from "./Binary";
import Decimal from "./Decimal";
import Expression from "./Expression";
import Hexadecimal from "./Hexadecimal";

interface IOutputProps {
  expr: string;
}

export const Output: React.FC<IOutputProps> = ({ expr }) => {
  const result = 5;

  return (
    <div className="col-span-3 row-span-2 bg-blue-50">
      <div className="m-8 rounded-xl p-4 bg-blue-200 flex flex-col items-end font-mono">
        <Expression expr={expr} />
        <Decimal result={result} />
        <Binary result={result} />
        <Hexadecimal result={result} />
      </div>
    </div>
  );
};
