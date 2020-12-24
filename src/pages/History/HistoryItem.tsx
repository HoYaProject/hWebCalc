import React from "react";

interface IHistoryItemProps {
  history: THistory;
}

const HistoryItem: React.FC<IHistoryItemProps> = ({ history }) => {
  return (
    <div className="w-5/6 py-4 font-mono text-right">
      <div className="text-lg text-blue-100 ">{history.expr}</div>
      <div className="text-xl text-blue-200 ">{history.result}</div>
    </div>
  );
};

export default HistoryItem;
