// Create web server
const express = require('express');
const app = express();
// Create a server
const http = require('http');
const server = http.createServer(app);
// Create Websocket
const io = require('socket.io')(server);