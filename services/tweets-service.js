const tweets = require('../data/tweets.json'); // load tweets.json

module.exports = (app) => { // export a function that accepts an express instance
    
    const findAllTweets = (req, res) => { // handle HTTP GET request for all tweets
        res.json(tweets); // respond with tweets array imported earlier
    }
    
    app.get('/api/tweets', findAllTweets); // listen for HTTP GET request to /api/tweets, handle request
};
