import { useState, useMemo } from "react";
import MemoChild from "./MemoChild";
import { slowFunction } from "../../utils/slowFunctions";
import RenderCounter from "../../components/RenderCounter";

export default function UseMemoLab() {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // const expensiveValue = slowFunction(number);
  const items = useMemo(() => {
    return [1, 2, 3];
  }, []);

  // const items = [1, 2, 3];
  return (
    <div>
      <h2>useMemo Lab</h2>

      <RenderCounter name="Parent" />

      <button onClick={() => setCount((c) => c + 1)}>
        상관없는 상태: {count}
      </button>

      <button onClick={() => setNumber((n) => n + 1)}>
        숫자 변경 ({number})
      </button>

      <p>계산 : {expensiveValue}</p>

      <MemoChild items={items} />
    </div>
  );
}