const mongoose = require("mongoose");
const redis = require('redis').createClient(6379, 'redisdb');

module.exports = {
  connectMongoDB() {
    return mongoose.connect(
      "mongodb://mongodb:27017/aircnc",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      err => err && console.error('Error connect on database "aircnc"')
    );
  },

  connectRedisDB() {
    redis.on('error', () => {
      console.log('Error connect on RedisDB')
    })
  }
};
