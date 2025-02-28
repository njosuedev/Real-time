// packages

import express from "express";
import http from "http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import { Socket } from "node:dgram";

// instance

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serving html file

const __direname = dirname(fileURLToPath(import.meta.url));
app.get("/", (req, res) => res.sendFile(join(__direname, "index.html")));

// defining a connection event handler

io.on("connection", (client) => {
    console.log("user connected to ( server )");

    client.emit("message","this is a message from server!");

    client.on("new message", message => {
        console.log(message)
    })

   client.on("disconnect",() => {
    console.log("user disconnected from server");
   })
})

// Start the server

const PORT = 3000;
server.listen(PORT, () => console.log(`Server is running on : ${PORT}`));
