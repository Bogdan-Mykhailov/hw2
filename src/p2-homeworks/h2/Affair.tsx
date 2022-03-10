import React from 'react'
import {AffairType} from "./HW2";
import classes from './Affair.module.css'

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType // fixed
  deleteAffairCallback: (_id: number) => void // fixed
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }// fixed

  return (

    <div className={classes.wrapper}>
      <button className={classes.btn} onClick={deleteCallback}>✘</button>
      <div className={classes.affairTitle}>
        {props.affair.name}
      </div>
    </div>
  )
}

export default Affair
