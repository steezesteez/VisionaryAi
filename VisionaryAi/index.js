
// Main script for Visionary AI Bot

const config = require('./config');
const scheduler = require('./scheduler');

console.log('Visionary AI Bot is running...');

// Schedule tweets
setInterval(scheduler.scheduleTweet, config.tweetInterval);
