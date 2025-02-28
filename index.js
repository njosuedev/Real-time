// packages

import express from "express";
import http from "http";
import { fileURLToPath } from "node:url";
import { dirname,join } from "node:path";
import {Server} from "socket.io";

// instance

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serving html file

const __direname = dirname(fileURLToPath(import.meta.url));
app.get("/",(req,res) => res.send(join(__direname,"index.html")));

// Start the server

const PORT = 3000;
server.listen(PORT,() => console.log(`Server is running on : ${PORT}`));
