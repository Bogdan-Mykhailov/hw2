import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
  onKeyPressInputHandler: ({charCode}: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {
    name,
    setNameCallback,
    addUser,
    error,
    totalUsers,
    onKeyPressInputHandler
  }) => {

  const inputClass = error ? s.errorInput : s.input

  return (
    <div className={s.wrapper}>
      <div>
        <input onKeyPress={onKeyPressInputHandler}
               value={name}
               onChange={setNameCallback}
               onBlur={setNameCallback}
               className={inputClass}/>

        <button className={s.button} onClick={addUser} disabled={!name}>Add</button>
        <span className={s.counter}>{totalUsers}</span>
      </div>
      <span className={s.error}>{error}</span>

    </div>
  )
}

export default Greeting
