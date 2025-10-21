import { useState } from 'react'

interface ClickCounterProps{
title : string ;
}

const ClickCounter = ({title}:ClickCounterProps) => {
    const [count, setCount] = useState(0)

return(
    <div className="card">
        <h4>{title}</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
);
};

export default ClickCounter;