import { Dispatch, SetStateAction } from 'react'

export type setSelect = {
  setUserSelect: Dispatch<SetStateAction<number>>
  setEnemySelect: Dispatch<SetStateAction<number>>
}

export type result = {
  enemySelect: number
  result: number
}
