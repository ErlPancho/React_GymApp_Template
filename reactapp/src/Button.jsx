import { useState } from "react"

export function Button({color}) {

    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)} style = {{backgroundColor: color}}>
            <p>{count}</p>
        </button>
    )
    }