import react from "react";
import Tweet from "./Tweet";
// import Tweet from "./components/Tweet.js";

const TweetList = ({ name, tweets, setTweets }) => {
  return (
    <div className="tweet-list">
      <h1>hello</h1>
      {tweets.map((tweet) => (
        <Tweet
          name={name}
          tweet={tweet}
          tweets={tweets}
          setTweets={setTweets}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
