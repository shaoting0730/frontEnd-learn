import React from 'react';
import { GlobalStyled } from './style.js';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyled />
        <BrowserRouter>
          <Header />
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
