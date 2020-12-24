import React from "react";
import { Output } from "./pages/Output/Output";
import { Controller } from "./pages/Controller/Controller";
import { History } from "./pages/History/History";

function App() {
  return (
    <div className="App w-screen h-screen grid grid-cols-4 grid-rows-6">
      <Output />
      <History />
      <Controller />
    </div>
  );
}

export default App;
