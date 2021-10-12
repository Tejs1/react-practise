import React from "react";
import TodoList from "./TodoList";
const alert = () => {
  console.log("hi there");
};
function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>create</button>
      <button onClick={alert}>clear complete</button>
      <div>Hello</div>
    </>
  );
}

export default App;
