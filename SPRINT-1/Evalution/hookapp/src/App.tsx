import "./App.css";
import { useList } from "./hooks/useList";
import { useCounter } from "./hooks/useCounter";

function App() {
  const [list, { push, pop, clear, reset, map }]:any = useList([1, 2, 3]);
  const { value, inc, dec, set } = useCounter(10);
  return (
    <div className="App">
      <button onClick={() => push(list.length + 1)}>Append</button>
      <button onClick={() => pop()}>pop</button>
      <button onClick={() => clear()}>clear</button>
      <button onClick={() => reset()}>reset</button>
      <button onClick={() => map((e: any) => e * 2)}>
        DOUBLE EVERY ELEMENT
      </button>
      {list.map((l: any) => (
        <div key={l}>{l}</div>
      ))}

     <br/><br/>
      <button onClick={() => inc(1)}>Add 1</button>
      <button onClick={() => inc(3)}>Add 3</button>
      <button onClick={() => dec(1)}>Sub 1</button>
      <button onClick={() => dec(4)}>Sub 4</button>
      <button onClick={() => set(100)}>Set counter to 100</button>
      <h3>Value: {value}</h3>
    </div>
  );
}

export default App;
 