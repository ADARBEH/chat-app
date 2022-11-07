'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const chatrouter = require('./controllers/chat');
const http = require('http');
const   Chat = require('./models/chat');

require('./config/db');

// the code do not work, i have this error: GET http://localhost:3005/socket.io/?EIO=4&transport=polling&t=OHHvSDb 404 (Not Found)
// and i delete the require of socket.io

// require('./config/sockets');


const app = express();
const server = http.createServer(app);


// start code of socket.io
const socketIO = require('socket.io');
const io = socketIO(server, {
  transports: ['websocket', 'polling'],
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT']
  }
})

io.on('connection', (socket) => {
  console.log(`User-ID {${socket.id}} is Connected`);
  io.emit('connection', socket.id);
  
  socket.on('disconnect', () => {
    console.log(`User-ID {${socket.id}} is Disconnected !`);
  })
})

// end code of socket.io


app.use(cors());
app.use(express.json());


// routes for chat
// app.use('/chat' , chatrouter);



//  routes for chat 

app.get('/', (req, res) => {
    Chat.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error', error);
        });
});

app.post('/', (req, res) => {
    const data = req.body;
    const newChat = new Chat(data);
    newChat.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        io.emit('new-message');
        return res.status(201).json({
            msg: 'Your data has been saved'
        });

    });
});


// port
const PORT = process.env.PORT || 3004;


//listen to port 
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}
);

// module.exports = io;

