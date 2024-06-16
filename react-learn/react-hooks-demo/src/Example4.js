import React, { useState,createContext,useContext } from 'react'

// useState 简单使用

function Example4() {
  const [count, setCount] = useState(0); 
 const CountContext = createContext();

 function Child(){
   let count = useContext(CountContext);
   return (
       <h1>我是子组件{count}</h1>
   )
 }

  return <div>
    <p>useContext的简单使用:父子之间传递数据</p>
    <p>我是父组件: {count}</p>
    <button onClick={() => { setCount(count + 1) }}>+1</button>
    <button onClick={() => { setCount(count - 1) }}>-1</button> 
    <CountContext.Provider value={count}>
       <Child />
    </CountContext.Provider>
  </div>
}

export default Example4;
