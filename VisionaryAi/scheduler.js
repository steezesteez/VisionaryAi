
// Scheduler module for posting tweets

const Twit = require('twit');
const config = require('./config');
const utils = require('./utilities');

const T = new Twit(config.twitterKeys);

const scheduleTweet = () => {
  const tweet = { status: utils.randomTweet() };

  T.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.error('Error posting tweet:', err);
    } else {
      console.log('Tweet posted:', data.text);
    }
  });
};

module.exports = {
  scheduleTweet,
};
