import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function cart() {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        <li key={uuidv4()}>
          <h1>Item1</h1>
          <button>Add to Cart</button>
        </li>
      </ul>
    </div>
  );
}
