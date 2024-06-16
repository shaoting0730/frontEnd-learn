import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example1 from './Example1';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';
import Example5 from './Example5';
import Example6 from './Example6';
import Example7 from './Example7'; 
import Example8 from './Example8'; 

import ExampleClass from './Example-class';


ReactDOM.render(
  <div>
    {/* <ExampleClass  /> */}
    <Example1 />
    <hr/> 
    <Example2 /> 
    <hr/> 
    <Example3/>
    <hr/> 
    <Example4/>
    <hr/>
    <Example5/>
    <hr/>
    <Example6/>
    <hr/>
    <Example7/>
    <hr/>
    <Example8/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
