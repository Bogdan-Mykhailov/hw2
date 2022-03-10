import React from 'react'
import Message from "./Message";

const messageData = {
  avatar: 'https://cdn.pixabay.com/photo/2016/11/21/16/01/woman-1846127_1280.jpg',
  name: 'Jessica Brown',
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