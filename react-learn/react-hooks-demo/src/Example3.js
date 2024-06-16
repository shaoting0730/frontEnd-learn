import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Index1() {
  useEffect(() => {
    console.log('组件1componentDidMount ');
    return () => {
      console.log('组件1componentWillUnmount');
    }
  })
  return <div>
    <h2>组件1</h2>
  </div>
}

function Index2() { 
  useEffect(() => {
    console.log('组件2componentDidMount ');
    return () => {
      console.log('组件2componentWillUnmount');
    }
  })
  return <div>
    <h2>组件2</h2>
  </div>
}

function Example3() {

  return <div>
    <p>useEffect代替componentWillUnmount使用</p>
    <Router>
      <ul>
        <li><Link to="/">组件1</Link></li>
        <li><Link to="/two/">组件2</Link></li>
      </ul>
      <Route path="/" exact component={Index1} />
      <Route path="/two/" component={Index2} />
    </Router>

  </div>

}

export default Example3;
