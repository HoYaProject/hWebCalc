import React, { useState, KeyboardEvent } from "react";
import { Output } from "./pages/Output/Output";
import { Controller } from "./pages/Controller/Controller";
import { History } from "./pages/History/History";

function App() {
  const [expr, setExpr] = useState("");

  const pressKey = (ev: KeyboardEvent<HTMLDivElement>): any => {
    const pattern = new RegExp("[0-9a-f+-/*=]");
    if (ev.keyCode === 27) {
      setExpr("");
    } else if (ev.key.length === 1 && pattern.test(ev.key.toLowerCase())) {
      console.log(ev.key.toLowerCase());
      setExpr(expr + ev.key);
    }
  };

  const addExpr: TAddExpression = (newExpr) => {
    if (newExpr.toLowerCase() === "ac") {
      setExpr("");
    } else {
      setExpr(expr + newExpr);
    }
  };

  return (
    <div
      className="App w-screen h-screen grid grid-cols-4 grid-rows-6"
      onKeyDown={pressKey}
      tabIndex={0}
    >
      <Output expr={expr} />
      <History />
      <Controller addExpr={addExpr} />
    </div>
  );
}

export default App;
