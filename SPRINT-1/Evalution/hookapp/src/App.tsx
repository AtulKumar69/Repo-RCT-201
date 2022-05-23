import "./App.css";
import { useList } from "./hooks/useList";
import { useCounter } from "./hooks/useCounter";

function App() {
  const [list1, { push, pop, clear, reset, map }]:any = useList([1, 2, 3]);
  const { value, increment, decrement, set } = useCounter(10);
  return (
    <div className="App">
      <button onClick={() => push(list1.length + 1)}>APPEND</button>
      <button onClick={() => pop()}>POP</button>
      <button onClick={() => clear()}>CLEAR</button>
      <button onClick={() => reset()}>RESET</button>
      <button onClick={() => map((e: any) => e * 2)}>
        DOUBLE EVERY ELEMENT
      </button>
      {list1.map((ul: any) => (
        <div key={ul}>{ul}</div>
      ))}

     <br/><br/>
      <button onClick={() => increment(1)}>Add 1</button>
      <button onClick={() => increment(3)}>Add 3</button>
      <button onClick={() => decrement(1)}>Sub 1</button>
      <button onClick={() => decrement(4)}>Sub 4</button>
      <button onClick={() => set(100)}>Set counter to 100</button>
      <h3>Output: {value}</h3>
    </div>
  );
}

export default App;
 