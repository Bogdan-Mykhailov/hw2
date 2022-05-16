import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SupperDoubleRange.module.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperDoubleRangePropsType = DefaultInputPropsType & {
  // onChangeRange2?: (value2: [number, number]) => void
  // value2?: [number, number]
  value1: number
  values: number[]
  setValues: (values: number[]) => void
  min?: string | number | undefined,
  max?: string | number | undefined,
  // step?: string | number | undefined,
  disable?: boolean,
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
  {
    setValues,
    value,
    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
    onChange,
    className,
    min, max, step,

    ...restProps// все остальные пропсы попадут в объект restProps
  }
) => {

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, newValue: number | number[]) => {
    onChange && onChange(e)
    const values = newValue as number[]
    setValues && setValues(values);
     // сохраняем старую функциональность

  }

  // сделать самому, можно подключать библиотеки


  return (
    <div>

      <input
        type={'range'}

        // disabled={disable}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      <input
        type={'range'}
        onChange={(e)=>onChangeCallback}


        value={value}
        // disabled={disable}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />

      {/*DoubleRange*/}
    </div>
  )
}

export default SuperDoubleRange
