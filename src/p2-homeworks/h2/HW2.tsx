import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'  // fixed
export type AffairType = { _id: number, name: string, priority: string }  // fixed
export type FilterType = 'all' | AffairPriorityType  // fixed

// constants
const defaultAffairs: AffairType[] = [             // fixed
  {_id: 1, name: 'Learn React', priority: 'high'},
  {_id: 2, name: 'Learn Redux', priority: 'high'},
  {_id: 3, name: 'Rest', priority: 'low'},
  {_id: 4, name: 'Get good offer', priority: 'high'},
  {_id: 5, name: 'Learn Xcode', priority: 'middle'},
  {_id: 6, name: 'Sleep ', priority: 'low'},
  {_id: 7, name: 'Finis Path of Samurai', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // fixed
  if (filter === 'low') return affairs.filter(i => i.priority === 'low')
  else if (filter === 'high') return affairs.filter(i => i.priority === 'high')
  else if (filter === 'middle') return affairs.filter(i => i.priority === 'middle')
  else return affairs
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // fixed
  return affairs.filter((i) => i._id !== _id)    // fixed
}

function HW2() {
  const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // fixed
  const [filter, setFilter] = useState<FilterType>('all')

  const filteredAffairs = filterAffairs(affairs, filter)
  const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // fixed

  return (
    <div>
      <hr/>
      homeworks 2

      {/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
      />

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeAffairs/>*/}
      <hr/>
    </div>
  )
}

export default HW2
