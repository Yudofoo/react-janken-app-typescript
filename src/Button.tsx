import { setSelect } from "./types"

export const Button = ({ setEnemySelect, setUserSelect }: setSelect) => {
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  const judge = (number: number) => {
    setEnemySelect(random(1, 3))
    setUserSelect(number)
  }
  return (
    <div>
      <p className="flex justify-center text-3xl">What's your select ???</p>
      <div className="flex justify-center">
        <input
          type="image"
          src="rdesign_14296.png"
          alt=""
          className="h-20"
          onClick={() => judge(1)}
        />
        <input
          type="image"
          src="rdesign_14297.png"
          alt=""
          className="h-20"
          onClick={() => judge(2)}
        />
        <input
          type="image"
          src="rdesign_14298.png"
          alt=""
          className="h-20"
          onClick={() => judge(3)}
        />
      </div>
    </div>
  )
}
