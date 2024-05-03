import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./Redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-purple-50 p-10 ">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          increament
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-yellow-500 text-xl font-semibold text-white"
        >
          Increment By Value
        </button>
      </div>
    </div>
  );
}

export default App;
