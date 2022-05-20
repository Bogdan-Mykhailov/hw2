import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(55)

  const inputRangeHandler = (num: number) => {
    if (num >= value2) return
    setValue1(num)
  }

  const doubleInputRangeHandler = (nums: Array<number>) => {
    setValue1(nums[0])
    setValue2(nums[1])
  }

  return (
    <div>
      <span>homeworks 11</span>
      <div className={s.container}>
        <br/>
        <div>
          <SuperRange
            value={value1}
            min={0}
            max={100}
            onChangeRange={inputRangeHandler}
          />
        </div>
        <div>
          <SuperDoubleRange
            value={[value1, value2]}
            min={0}
            max={100}
            onChangeRange={doubleInputRangeHandler}
            setValue1={setValue1}
            setValue2={setValue2}
          />
          <div className={s.valueContainer}>
            <span>{value1}</span>
            <span>{value2}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW11