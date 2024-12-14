import { useDispatch, useSelector } from "react-redux";
import { Decrementer, Incrementer, Reset } from "./action";

export default function App() {
  const num = useSelector(data => data.num)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <p>{num}</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          return dispatch(Incrementer())
        }}
      >
        Incrementer
      </button>
<br />
      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          return dispatch(Decrementer())
        }}
      >
        Decrementer
      </button>
<br />
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          return dispatch(Reset())
        }}
      >
        Reset
      </button>

    </div>
  )
}