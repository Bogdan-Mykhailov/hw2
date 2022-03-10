import React from 'react'
import classes from './Error.module.css'

function Error404() {
  return (
    <div>
      <div className={classes.errorNum}>404</div>
      <div className={classes.text}>Page not found!</div>
      <div className={classes.man}>👨🏻‍🔧</div>
    </div>
  )
}

export default Error404

