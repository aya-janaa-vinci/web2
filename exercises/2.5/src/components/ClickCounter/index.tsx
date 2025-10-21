import { useState } from 'react'

interface ClickCounterProps{
title : string ;
on10ClickMessage? : string;
}

const ClickCounter = ({title,
    on10ClickMessage = "You are a master in the art of clicking !"}
    :ClickCounterProps) => {
    const [count, setCount] = useState(0)

return(
    <div className="card">
        <h4>{title}</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {count >= 10 ? <p>{on10ClickMessage}</p> : null}
      </div>
);
};

export default ClickCounter;