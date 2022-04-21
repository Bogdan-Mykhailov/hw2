import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment, {Moment} from "moment";
import classes from './Clock.module.css'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Moment>()
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    clearTimeout(timerId)
  }
  const start = () => {
    stop()
    const id: number = window.setInterval(() => {
      setDate(moment())
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    setShow(false)
  }

  const stringTime = date?.format('HH:mm:ss') // fix with date
  const stringDate = date?.format("MMM Do YY") // fix with date

  return (
    <div className={classes.wrapper}>
      <div className={classes.interface}>
        <div className={classes.timeInterface}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
          {stringTime}
        </div>

        {show && (
          <div className={classes.dateInterface}>
            {stringDate}
          </div>
        )}
      </div>
      <div>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton></div>
    </div>
  )
}

export default Clock
