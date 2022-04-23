import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from './assets/preloader.svg'
import classes from './HW10.module.css'

function HW10() {
  // useSelector, useDispatch
  const loading = useSelector<AppStoreType, boolean>(store => store.loading.loading)
  const dispatch = useDispatch()


  const setLoading = () => {

    dispatch(loadingAC(!loading))
    setTimeout(() => {
      dispatch(loadingAC(loading))
    }, 3000)
  };

  return (
    <div>
      <hr/>
      homeworks 10

      {/*should work (должно работать)*/}
      <div className={classes.wrapper}>
        {loading
          ? (
            <div className={classes.preloaderWrapper}><img src={preloader} alt="preloader"/></div>
          ) : (
            <div className={classes.preloaderBtn}>
              <SuperButton onClick={setLoading}>set loading...</SuperButton>
            </div>
          )
        }
      </div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
