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

console.log("server is running here!")
