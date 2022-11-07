import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Chats from './Chats';
import {io} from 'socket.io-client';
import Send from './Send';



export default function Chat() {
  const [chat, setChat] = useState([]);
  
  

  const getchat = async () => {
    const res = await axios.get('http://localhost:3005/');
    setChat(res.data);
  }

  useEffect(() => {
    const socket = io('ws://localhost:3005');

    socket.on('connection', (socket) => {
      console.log('connected To server with id: ', socket);
    });

    socket.on('new-message', () => {
      getchat();
    });

    socket.on('disconnect', () => {
      console.log('disconnected To server');
    });
  }, [])

  useEffect(() => {
    getchat();
  }, [])

  return (
    <div>

    <h1 className='name'>Welcome to the chat room</h1>
      {chat && chat.map( chat => (
        <div key={chat._id}> <Chats chat={chat} /> </div>
      ))}
      
      <Send />
    </div>
  )
}