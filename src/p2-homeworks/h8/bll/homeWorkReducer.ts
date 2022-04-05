import {UserType} from "../HW8";

type ActionType = CheckType | SortType

type CheckType = {
  type: string
  payload: number
}
type SortType = {
  type: string
  payload: 'up' | 'down'
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': {
      const newState = [...state].sort((a, b) => {
        if (a.name > b.name) {
          return (1)
        } else if (a.name < b.name) {
          return (-1)
        } else return 0
      })

      return action.payload === 'up' ? newState : newState.reverse()
    }
    case 'check': {

      return state.filter(s => s.age >= action.payload)
    }
    default:
      return state
  }
}
