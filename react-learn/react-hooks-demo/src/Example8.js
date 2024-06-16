import React, { useState,useEffect,useCallback } from 'react'

function useWinSize(){
    const [size,setSize] = useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight,
    })

    const onResize = useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight,
        })
    },[])

    useEffect(()=>{
        window.addEventListener('resize',onResize);
        return ()=>{
            window.removeEventListener('resize',onResize);
        }
    }) 
   return size;
}


function Example8() {
    const size = useWinSize();
    return <div>
      <p>自定义Hook函数</p>
      <p>页面size:{size.width} + {size.height}</p>
    </div>
  }
  
  export default Example8;
  