const path = require('path')


const express = require("express");
const { createServer } = require("http");
const app = express();
const httpServer = createServer(app);
const io = require("socket.io")(httpServer, {
  cors: {
    methods: ["GET", "POST"],
    credentials: true,
  },
});
httpServer.listen(4001);

app.use(express.static(path.join(__dirname, 'public')))


io.on("connection", (client) => {
    console.log("user connected")
  client.on("hi",() =>{
    console.log("hi")
  })
});
