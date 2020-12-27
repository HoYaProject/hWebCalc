import React, { MouseEvent } from "react";

interface IControllerProps {
  addExpr: TAddExpression;
}

export const Controller: React.FC<IControllerProps> = ({ addExpr }) => {
  const clickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    addExpr((e.target as any).innerText);
  };

  return (
    <div className="col-span-3 row-span-4 bg-blue-50">
      <div className="p-8 grid grid-cols-4 grid-rows-6 gap-4">
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-yellow-500 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          AC
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          D
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          E
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          F
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-yellow-500 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          +
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          A
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          B
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          C
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-yellow-500 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          -
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          7
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          8
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          9
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-yellow-500 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          *
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          4
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          5
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          6
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-yellow-500 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          /
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          1
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          2
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          3
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-yellow-500 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          =
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner col-span-2"
          onClick={clickBtn}
        >
          0
        </button>
        <button
          className="h-20 rounded-lg text-4xl text-bold text-gray-50 bg-gray-400 focus:outline-none active:shadow-inner"
          onClick={clickBtn}
        >
          .
        </button>
      </div>
    </div>
  );
};
