import React from "react";
import HistoryItem from "./HistoryItem";

export const History: React.FC = () => {
  const objHistory: Array<THistory> = [
    { expr: "3+2=", result: 5 },
    { expr: "4-2=", result: 2 },
    { expr: "3*5=", result: 15 },
  ];

  return (
    <div className="container mx-auto col-span-1 row-span-6 bg-blue-900">
      <div className="m-4 font-bold text-2xl text-blue-100 text-center">
        History List
      </div>
      <div className="flex flex-col items-center divide-y divide-blue-500">
        {objHistory.map((obj, i) => (
          <HistoryItem history={obj} key={i} />
        ))}
      </div>
    </div>
  );
};
