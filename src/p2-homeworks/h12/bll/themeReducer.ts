const initState = {
  theme: 'dark' as ThemesType
}
export type ThemesType ='dark' | 'red' | 'some'

type InitialStateType = typeof initState

type ActionsType = changeThemeACType

export const themeReducer = (state: InitialStateType = initState, action: ActionsType): InitialStateType => { // fix any
  switch (action.type) {
    case "CHANGE-THEME": {
      return {
        ...state,
        theme: action.payload.theme
      }
    }
    default:
      return state;
  }
};

export type changeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: ThemesType) => ({
  type: "CHANGE-THEME",
  payload: {
    theme
  }
}) as const; // fix any