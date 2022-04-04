import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import classes from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
  {
    type, name,
    options, value,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
    onChangeOption && onChangeOption(e.currentTarget.value)
    // onChange, onChangeOption
  }


  const mappedOptions: any[] = options ? options.map((o, i) => (
    <label key={name + '-' + i}>
      <input
        className={classes.radio}
        type={'radio'}
        name={name}
        value={o}
        onChange={onChangeCallback}
        checked={o === value}
        // name, checked, value, onChange
      />
      {o}
    </label>
  )) : []

  return (
    <>
      {mappedOptions}
    </>
  )
}

export default SuperRadio
