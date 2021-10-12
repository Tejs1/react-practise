import React from "react";
import comments from "./comments";

export default function TodoList() {
  return (
    <div>
      <h1>this id 1st tweet</h1>
      <button onClick={comments}>like</button>
      {/* {[comments]} */}
      <comments />
    </div>
  );
}
