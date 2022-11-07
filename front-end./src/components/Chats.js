import React from 'react'

export default function chat(props) {
  return (
    <div>
      <p><span className='spandata'>{props.chat.username}</span><q className='qname'>{props.chat.message}</q></p>
    </div>
  )
}