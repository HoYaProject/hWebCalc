import React from "react";
import { radixConverter as rc } from "../../components/radixConverter";
import Binary from "./Binary";
import Decimal from "./Decimal";
import Expression from "./Expression";
import HexaDecimal from "./HexaDecimal";

export const Output: React.FC = () => {
  const expr = "3+2=";
  const result = 5;
  const binNum = rc.convertDecimalToBinary(result);
  const hexNum = rc.convertDecimalToHexadecimal(result);

  return (
    <div className="col-span-3 row-span-2 bg-blue-50">
      <div className="m-8 rounded-xl p-4 bg-blue-200 flex flex-col items-end font-mono">
        <Expression expr={expr} />
        <Decimal result={result} />
        <Binary result={binNum} />
        <HexaDecimal result={hexNum} />
      </div>
    </div>
  );
};
