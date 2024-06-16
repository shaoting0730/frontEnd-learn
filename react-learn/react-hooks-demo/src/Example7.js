import React, { useState, useMemo } from 'react'

// useState 简单使用
function Example7() {
  const [name, setName] = useState('name');
  const [content, setContent] = useState('content');

  return (
    <div>
      <div>useMemo提升性能</div>
      <button onClick={() => setName(new Date().getTime())}>{name}</button>
      <button onClick={() => setContent(new Date().getTime())}>{content}</button>
      <Child name={name}>{content}</Child>
    </div>
  )
}

// 不使用useMemo,会造成不必要的性能开销
// function Child({name,children}){
//   function changeName(name){
//       console.log('child执行了');
//       return name + '改变';
//   }
//   const otherName  = changeName(name);
//   return (
//     <div>
//          <div>{otherName}</div>
//          <div>{children}</div> 
//     </div>
//   )
// }

 // 使用useMemo 
  function Child({ name, children }) {
    function changeName(name) {
      console.log('child执行了');
      return name + '改变';
    }
    const otherName = useMemo(() => changeName(name),[name])
    return (
      <div>
        <div>{otherName}</div>
        <div>{children}</div>
      </div>
    )
  }

export default Example7;
