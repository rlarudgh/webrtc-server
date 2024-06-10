const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;
const io = new Server(server, {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["my-custom-header"],
  credentials: true,
});

server.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});
