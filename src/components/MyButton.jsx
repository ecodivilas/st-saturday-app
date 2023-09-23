import { useState } from "react"

export default function MyButton() {
    const [count, setCount] = useState(0)
  
    function handleClick() {
      setCount(count + 1)
    }
  
    return (
      <button onClick={handleClick} className="font-semibold text-red-600"  >
        Clicked {count} times
      </button>
    );
  }