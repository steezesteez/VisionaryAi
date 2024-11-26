
// Utility functions for Visionary AI Bot

const randomTweet = () => {
  const tweets = [
    'Hello, world! #AI',
    'Visionary AI is watching. #Tech',
    'Creating the future, one tweet at a time. #Innovation',
  ];
  return tweets[Math.floor(Math.random() * tweets.length)];
};

module.exports = {
  randomTweet,
};
