import react, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateTweet({ setTextInput, tweets, setTweets, textInput }) {
  const mystyle = {
    fontFamily: "Arial",
    fontSize: "1rem",
  };

  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  function submitHandler(e) {
    e.preventDefault();
    setTweets([...tweets, { msg: textInput, id: uuidv4() }]);
    setTextInput("");
  }
  return (
    <form onSubmit={submitHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="10"
      ></textarea>
      <h1 style={mystyle}>{textInput}</h1>
      <button>submit</button>
    </form>
  );
}
export default CreateTweet;
