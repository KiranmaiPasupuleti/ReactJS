import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
    function onSub() {
        setCount(count-1)
    }
    function onAdd() {
        setCount(count+1)
    }function onDouble() {
        setCount(count*2)
    }
  return (
    <div>
        <h2>Counter</h2>
        <div>
            <h1>{count}</h1>
            <button onClick={onSub}>Sub</button>
            <button onClick={onAdd}>Add</button>
            <button onClick={onDouble}>Double</button>
        </div>
    </div>
  )
}

export default Counter