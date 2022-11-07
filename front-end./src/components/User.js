// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import Chat from './Chat';




export default function User() {


    const [cookies, setCookie] = useCookies(['username']);

    const handelSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        setCookie('username', username, { path: '/' });
        console.log(cookies.username);
    }





    return (
        <div>
            {
                cookies.username ? <Chat /> : 
                <>
                <h1 className='name'>Please enter your name to start the conversation 💀</h1>

                <form className='name_form' onSubmit={handelSubmit}>
                    <input className='inputname' type="text" placeholder=" Enter Your Name" name='username' />
                    <input className='subname' type="submit" value="Start" />
                </form>
                </>
            }
        </div>
    )
}