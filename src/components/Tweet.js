import react, { useEffect } from "react";

const Tweet = ({ name, tweet, setTweets, tweets }) => {
  // useEffect(() => {
  //   // effect
  //   console.log(tweet);
  // }, [tweet]);
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id != tweet.id));
  };
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet.msg}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;