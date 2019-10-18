const express = require("express");
const cors = require("cors");
const path = require("path");
const socket = require("socket.io");
const http = require("http");
const redis = require('redis').createClient(6379, 'redisdb');

class AppController {
  constructor() {
    this.express = express();
    this.server = http.Server(this.express);

    this.middlewares();
    this.routes();
  }

  socket() {
    const io = socket(this.server);
    let connectedUsers = {};

    // Quando um usuário faz login, seja ele mobileUser ou webUser, o user_id dele
    // é inserido em connectedUsers.
    io.on("connection", async socket => {
      const { user_id } = socket.handshake.query;

      redis.hset('connectedUsers', user_id, socket.id)

      redis.hgetall('connectedUsers', (err, users) => {
        connectedUsers = users;
      })
    });

    // Todas as rotas receberam um propriedade 'io' e uma 'connectedUsers', assim
    // poderam verificar quais usuários estão online(connectedUsers) e enviar
    // mensagens para eles(io ).
    this.express.use((req, res, next) => {
      req.io = io;
      req.connectedUsers = connectedUsers;

      return next();
    });
  }

  middlewares() {
    this.socket();

    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new AppController().server;
