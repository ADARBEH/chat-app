'use strict';

const express = require('express');
const router = express.Router();
const Chat = require('../models/chat');
const io = require('../server');


router.get('/', (req, res) => {
    Chat.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error', error);
        });
});

router.post('/', (req, res) => {
    const data = req.body;
    const newChat = new Chat(data);
    newChat.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        io.emit('order-added');
        return res.status(201).json({
            msg: 'Your data has been saved'
        });

    });
});


module.exports = router;

