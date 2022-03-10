import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'

type AffairsPropsType = {   // fixed
  data: AffairType[]
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter('all')
  } // fixed
  const setHigh = () => {
    props.setFilter('high')
  }
  const setMiddle = () => {
    props.setFilter('middle')
  }
  const setLow = () => {
    props.setFilter('low')
  }

  return (
    <div className={classes.wrapper}>

      {mappedAffairs}
      <div className={classes.btn}>
        <button className={classes.setButton} onClick={setAll}>All</button>
        <button className={classes.setButton} onClick={setHigh}>High</button>
        <button className={classes.setButton} onClick={setMiddle}>Middle</button>
        <button className={classes.setButton} onClick={setLow}>Low</button>
      </div>
    </div>
  )
}

export default Affairs
