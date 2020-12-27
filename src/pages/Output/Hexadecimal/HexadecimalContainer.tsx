import React from "react";
import { radixConverter as rc } from "../../../components/radixConverter";
import HexadecimalPresenter from "./HexadecimalPresenter";

interface IHexadecimalContainerProps {
  result: number;
}

const HexadecimalContainer: React.FC<IHexadecimalContainerProps> = ({
  result,
}) => {
  const hexNum = rc.convertDecimalToHexadecimal(result);

  return (
    <div className="w-full grid gap-4 grid-cols-8">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <HexadecimalPresenter value={hexNum.split("").slice(0, 4)} />
      <HexadecimalPresenter value={hexNum.split("").slice(4, 8)} />
      <HexadecimalPresenter value={hexNum.split("").slice(8, 12)} />
      <HexadecimalPresenter value={hexNum.split("").slice(12, 16)} />
    </div>
  );
};

export default HexadecimalContainer;
