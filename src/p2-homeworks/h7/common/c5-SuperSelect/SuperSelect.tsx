import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import classes from './SuperSelect.module.css'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {

  const mappedOptions: any[] = options ? options.map((option, index) => (
    <option key={option + '-' + index} value={option}>{option}</option>
  )) : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e)
    onChangeOption && onChangeOption(e.currentTarget.value)
    // onChange, onChangeOption
  }

  return (
    <select className={classes.select} onChange={onChangeCallback} {...restProps} >
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
