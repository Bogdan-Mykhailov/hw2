import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import s from './Request.module.css'
import {requestApi} from "../DAL/request-api";

export const Request = memo(() => {

  const [isChecked, setIsChecked] = useState(false)
  const [error, setError] = useState('')
  const checkedHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked)
  }
  const clickButtonHandler = useCallback(() => {
    requestApi.sendRequest(isChecked)
      .then((res) => {
          console.log(res.data.errorText)
          setError(res.data.errorText)
        }
      )
      .catch((err) => {
        console.log({...err})
        console.log(err.res ? err.res.data.errorText : err.message)
        setError(err.message)
      })
  }, [isChecked])

  return (
    <div className={s.wrapper}>
      <div>
        <input className={s.input} onChange={checkedHandler} type="checkbox"/>
      </div>
      <div className={s.spanDiv}>
        <span>{error}</span>
      </div>
      <div >
        <button className={s.button} onClick={clickButtonHandler}>send request</button>
      </div>
    </div>
  );
});