import react, { useEffect } from "react";
import Tweet from "./Tweet";
// import Tweet from "./components/Tweet.js";

const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          name={name}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
          key={tweet.id}
        />
      ))}
      {/*  foreach doesnt work */}
      {/* {tweets.forEach((tweet) => (
        <Tweet
          name={name}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
          key={tweet.id}
        />
      ))} */}
    </div>
  );
};

export default TweetList;
