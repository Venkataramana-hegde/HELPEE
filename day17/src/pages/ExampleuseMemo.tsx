import { useState } from "react";

const ExampleuseMemo = () => {
    const [count, setCount] = useState<number>(0);
    const[todo, setTodo] = useState<string[]>([""]);
    const calculation = expensiveCalculation(count);

    const increment = () => {
        setCount((count) => count + 1);
    }

    const addTodo = () => {
        setTodo((t) => [...t, `Todo`]);
    }

    return (
        <div>
            <div>
                <p>{count}</p>
                <button onClick={increment}>Increment</button>
            </div>
            <div>
                <p>{todo}</p>
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                <p>{calculation}</p>
            </div>
        </div>
    )
}

const expensiveCalculation = (num: number) => {
    for(let i = 0; i < 100; i++){
        num += 1;
    }
    return num;
}

export default ExampleuseMemo;

