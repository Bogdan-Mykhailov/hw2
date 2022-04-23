
const initState = {
  loading: false
}

const enum ACTION {
  LOADING = 'LOADING'
}

type InitialStateType = typeof initState

export type ActionsTypes = LoadingACType


export const loadingReducer = (state: InitialStateType = initState, action: ActionsTypes): InitialStateType => { // fix any
  switch (action.type) {
    case ACTION.LOADING: {
      return {
        ...state,
        loading: action.payload.loading
      }
    }
    default:
      return state
  }
}

export type LoadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (loading: boolean) => ({
type: ACTION.LOADING,
  payload: {
  loading
  }
}) // fix any