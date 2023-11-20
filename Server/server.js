const express = require('express');
const accessConfig = require('./config/accessConfig')
const http = require('http');
const socketIo = require('socket.io');
const setupWebSocketRoutes = require('./routes/webSocketRoutes');

const PORT = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
app.use(accessConfig)
const io = socketIo(server, 
    {
    cors: {
        origin: "*",
        methods: ['GET, POST'],
        credentials: true
    }
}
);

io.on('connection', (socket) => {
    console.log('New client connected');
    setupWebSocketRoutes(socket);
    socket.on('disconnect', (reason) => console.log('Client disconnected ', reason));

    socket.on('connect_error', (error) => {
        console.error('Connection Error:', error);
      });
      
  });

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
