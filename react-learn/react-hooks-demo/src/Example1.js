import React, { useState,useEffect } from 'react'

// useState 简单使用

function Example1() {
  const [count, setCount] = useState(0);

  // 此处的useEffect相当于componentDidMount 和  componentDidUpdate 
  useEffect(()=>{
    console.log('Example1下 useEffect执行了');
  }) 

  return <div>
    <p>useState的简单使用</p>
    <p> {count}</p>
    <button onClick={() => { setCount(count + 1) }}>+1</button>
    <button onClick={() => { setCount(count - 1) }}>-1</button> 
  </div>
}

export default Example1;
