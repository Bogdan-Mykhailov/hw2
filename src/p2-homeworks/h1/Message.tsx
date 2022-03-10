import React from 'react'
import classes from './Message.module.css'


type dataType = {
  avatar: string,
  name: string,
  message: string,
  time: string
}

function Message(props: dataType) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <img src={props.avatar} alt=""/>
      </div>
      <div className={classes.dialogWindow}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.message}>{props.message}</p>
        <p className={classes.time}>{props.time}</p>
      </div>
    </div>
  )
}

export default Message

