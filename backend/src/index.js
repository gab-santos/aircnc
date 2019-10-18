require("./database/db.connection").connectMongoDB();
require("./database/db.connection").connectRedisDB();

const server = require("./app");

server.listen(process.env.PORT || 3000, () =>
  console.log(`Server started on port ${process.env.PORT || '3000'}`)
);
