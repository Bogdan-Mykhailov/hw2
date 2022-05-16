import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemesType} from "./bll/themeReducer";

export const themes = ['dark', 'red', 'some'];

function HW12() {
  // const theme = 'some'; // useSelector
  const theme = useSelector<AppStoreType, ThemesType>(store => store.theme.theme)
  const dispatch = useDispatch()

  // useDispatch, onChangeCallback
  const onChangeCallback = (theme: string) => {
    dispatch(changeThemeAC(theme as ThemesType))
  }


  return (
    <div className={s[theme]}>
      <hr/>
      <span className={s[theme + '-text']}>
                homeworks 12
            </span>
      <SuperSelect
        onChange={(e) => onChangeCallback(e.currentTarget.value)}
        options={themes}
      />
      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}

      <hr/>
    </div>
  );
}

export default HW12;
