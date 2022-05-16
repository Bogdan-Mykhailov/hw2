import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import s from './HW11.module.css'
import {DoubleRangeSlider} from "./common/c8-SuperDoubleRange/SuperDoubleRangeMaterial";

function HW11() {
  const [value1, setValue1] = useState(0)
  const [values, setValues] = React.useState<number[]>([value1, 100]);

  useEffect(() => {
    setValues([value1, values[1]])
  },[value1])

  useEffect(() => {
    setValue1(value1)
  },[values[0]])

  return (
    <div>
      <hr/>
      homeworks 11

      {/*should work (должно работать)*/}
      <div className={s.wrapper}>
        <span>{value1}</span>
        <SuperRange onChangeRange={setValue1}/>
      </div>

      <div className={s.wrapper}>
        <span>{value1}</span>
        <DoubleRangeSlider
          value1={value1}
          values={values}
          setValues={setValues}
          setValue1={setValue1}
        />
        <span>{values[1]}</span>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr/>
    </div>
  )
}

export default HW11
