import React, { useState,useRef } from 'react'

// useRef 简单使用

function Example5() {
  const [inputVal,setInputVal] = useState('')
  const ref = useRef();
  function inputAction (){
     console.log(ref.current.value);
     setInputVal(ref.current.value);
  }
  return <div>
    <p>useRef使用:{inputVal}</p>
    <input onChange={inputAction} ref={ref} />
  </div>
}

export default Example5;
