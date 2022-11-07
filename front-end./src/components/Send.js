import axios from 'axios';
// import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'





export default function Orders() {


    const [cookies, setCookie] = useCookies(['username']);


    const handelSubmit = (e) => {
        e.preventDefault();
        const obj = {
            username: cookies.username,
            message: e.target.message.value
        }
        console.log(cookies.username);

        axios.post('http://localhost:3005/', obj)
            .then(res => {
                console.log(res);
            })
    }

    const logout = () => {
        setCookie('username', '', { path: '/' });

    }

    return (
        <div>

            <form className='form_send' onSubmit={handelSubmit}>
                <input className='inputname' type="text" name='message' />
                <input className='subname' type="submit" value="send" />
                <button className='subnam' onClick={logout}>Out Room</button>
            </form>

        </div>
    )
}