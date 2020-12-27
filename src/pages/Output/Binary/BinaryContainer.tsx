import React from "react";
import { radixConverter as rc } from "../../../components/radixConverter";
import BinaryPresenter from "./BinaryPresenter";

interface IBinaryContainerProps {
  result: number;
}

const BinaryContainer: React.FC<IBinaryContainerProps> = ({ result }) => {
  const binNum = rc.convertDecimalToBinary(result);

  return (
    <div className="w-full grid gap-4 grid-cols-8 grid-rows-2">
      <BinaryPresenter label={63} value={binNum.split("").slice(0, 4)} />
      <BinaryPresenter label={59} value={binNum.split("").slice(4, 8)} />
      <BinaryPresenter label={55} value={binNum.split("").slice(8, 12)} />
      <BinaryPresenter label={51} value={binNum.split("").slice(12, 16)} />
      <BinaryPresenter label={47} value={binNum.split("").slice(16, 20)} />
      <BinaryPresenter label={43} value={binNum.split("").slice(20, 24)} />
      <BinaryPresenter label={39} value={binNum.split("").slice(24, 28)} />
      <BinaryPresenter label={35} value={binNum.split("").slice(28, 32)} />
      <BinaryPresenter label={31} value={binNum.split("").slice(32, 36)} />
      <BinaryPresenter label={27} value={binNum.split("").slice(36, 40)} />
      <BinaryPresenter label={23} value={binNum.split("").slice(40, 44)} />
      <BinaryPresenter label={19} value={binNum.split("").slice(44, 48)} />
      <BinaryPresenter label={15} value={binNum.split("").slice(48, 52)} />
      <BinaryPresenter label={11} value={binNum.split("").slice(52, 56)} />
      <BinaryPresenter label={7} value={binNum.split("").slice(56, 60)} />
      <BinaryPresenter label={3} value={binNum.split("").slice(60, 64)} />
    </div>
  );
};

export default BinaryContainer;
