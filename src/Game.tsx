import { useState } from 'react'
import { Button } from './Button'
import { Result } from './Result'

export const Game = () => {
  const [userSelect, setUserSelect] = useState(0)
  const [enemySelect, setEnemySelect] = useState(0)
  const result = userSelect - enemySelect
  return (
    <div>
      <Result enemySelect={enemySelect} result={result} />
      <Button setUserSelect={setUserSelect} setEnemySelect={setEnemySelect} />
    </div>
  )
}
