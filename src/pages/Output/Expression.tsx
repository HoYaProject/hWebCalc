import React from "react";

interface IExpressionProps {
  expr: string;
}

const Expression: React.FC<IExpressionProps> = ({ expr }) => {
  return <div className="text-2xl tracking-widest text-blue-800">{expr}</div>;
};

export default Expression;
