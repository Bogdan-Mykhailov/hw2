import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./MyRoutes";
import classes from './Header.module.css'

function Header() {

  const [activeBar, setActiveBar] = useState(false)

  const onClickArrowHandler = () => {
    setActiveBar(!activeBar)
  }

  return (
    <div>
      <div className={activeBar ? classes.navigationBar : classes.navigationBarActive}>
        <div className={classes.navigationWrapper}>
          <button className={classes.btn}><NavLink to={PATH.PRE_JUNIOR} className={navData => navData.isActive ? classes.activeBtn : classes.notActiveBtn}>Pre_Junior</NavLink></button>
          <button className={classes.btn}><NavLink to={PATH.JUNIOR} className={navData => navData.isActive ? classes.activeBtn : classes.notActiveBtn}>Junior</NavLink></button>
          <button className={classes.btn}><NavLink to={PATH.JUNIOR_PLUS} className={navData => navData.isActive ? classes.activeBtn : classes.notActiveBtn}>Junior_Plus</NavLink></button>
        </div>
        <div className={classes.arrow} onClick={onClickArrowHandler}>▶︎</div>
      </div>

    </div>
  )
}

export default Header
