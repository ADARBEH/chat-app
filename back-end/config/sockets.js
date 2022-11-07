
// 'use strict';

// const app = require('../server');
// const http = require('http');
// const server = http.createServer(app);

// const socketIO = require('socket.io');
// const io = socketIO(server, {
//   transports: ['websocket', 'polling'],
//   cors: {
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT']
//   }
// })

// io.on('connection', (socket) => {
//   console.log('User is connected');
  
//   socket.on('message', (message) => {
//     console.log(`Message from ${socket.id} : ${message}`);
//   })

//   socket.on('disconnect', () => {
//     console.log(`Socket ${socket.id} disconnected!`);
//   })
// })


// module.exports = io;



// the code do not work, i have this error: GET http://localhost:3005/socket.io/?EIO=4&transport=polling&t=OHHvSDb 404 (Not Found)

