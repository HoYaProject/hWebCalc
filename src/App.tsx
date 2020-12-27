import React, { useState } from "react";
import { Output } from "./pages/Output/Output";
import { Controller } from "./pages/Controller/Controller";
import { History } from "./pages/History/History";

function App() {
  const [expr, setExpr] = useState("");

  const addExpr: TAddExpression = (newExpr) => {
    if (newExpr.toLowerCase() === "ac") {
      setExpr("");
    } else {
      setExpr(expr + newExpr);
    }
  };

  return (
    <div className="App w-screen h-screen grid grid-cols-4 grid-rows-6">
      <Output expr={expr} />
      <History />
      <Controller addExpr={addExpr} />
    </div>
  );
}

export default App;
