import React, { useState ,useEffect} from 'react'

function Example2() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

    // 此处的useEffect相当于componentDidMount 和  color的componentDidUpdate 
  useEffect(()=>{
    console.log('------切换color--------');
  },[color]) 
  
  // 此处的useEffect相当于componentDidMount 和  count的componentDidUpdate  
  useEffect(()=>{
    console.log('点击count');
  },[count])

 function changeColor(){
     if(color  === 'yellow'){
          setColor('red');
     }else{
         setColor('yellow'); 
     }
  }

  return <div style={{background:color}}>
    <p>useEffect简单使用</p>
    <p> {count}</p>
    <button onClick={() => { setCount(count + 1) }}>+1</button>
    <button onClick={() => { setCount(count - 1) }}>-1</button> 
    <button onClick={() => changeColor()}>切换颜色</button> 
  </div>
  
}

export default Example2;
