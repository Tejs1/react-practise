// import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
// import Tweet from "./components/Tweet";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
// import TestComponent from "./TestComponent";
// import TodoList from "./TodoList";
// const alert = () => {
//   alert("hi there");
// };

function App() {
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const name = "tejs";

  return (
    <>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        setTweets={setTweets}
        tweets={tweets}
      />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </>
  );
}

export default App;
