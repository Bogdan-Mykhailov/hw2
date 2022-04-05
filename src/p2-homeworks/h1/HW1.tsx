import React from 'react'
import Message from "./Message";

const messageData = {
  avatar: 'https://i.pinimg.com/originals/80/d8/e0/80d8e0232d36605e4fb8697353d4a4f2.gif',
  name: 'Pikachu',
  message: 'Call me back! 🤪',
  time: '12:17',
}

function HW1() {
  return (
    <div>
      <hr/>
      homeworks 1

      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr/>
    </div>
  )
}
export default HW1;