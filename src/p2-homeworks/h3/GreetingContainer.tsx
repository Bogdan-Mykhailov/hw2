import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: UserType[]
  addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {

  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    let names = e.currentTarget.value.trim()
    if (names) {
      setName(names)
      setError('')

    } else {
      setError('Wrong Name!')
      setName('')
    }
  }
  const onKeyPressInputHandler = ({charCode}: KeyboardEvent<HTMLInputElement>) => {
    if (charCode === 13 && name) addUser()
  }
  const addUser = () => {
    addUserCallback(name)
    setName('')
    alert(`Hello ${name}!`)
  }

  const totalUsers = users.length

  return (
    <Greeting
      onKeyPressInputHandler={onKeyPressInputHandler}
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
