import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import classes from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css'

function HW6() {
  const [value, setValue] = useState<string>('')

  const save = () => {
    saveState<string>('editable-span-value', value)
    setValue('')
  }
  const restore = () => {
    const restoredState = restoreState<string>('editable-span-value', value)
    setValue(restoredState)
  }

  return (
    <div>
      <hr/>
      homeworks 6

      {/*should work (должно работать)*/}
      <div className={classes.supperSpanWrapper}>
        <div>
          <SuperEditableSpan
            value={value}
            onChangeText={setValue}
            spanProps={{children: value ? undefined : '️✏️ insert text...'}}
          />
        </div>
        <div className={classes.btn}><SuperButton onClick={save}>save</SuperButton>
          <SuperButton onClick={restore}>restore</SuperButton></div>
      </div>
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperEditableSpan/>*/}
      <hr/>
    </div>
  )
}

export default HW6