import React from 'react';
import CounterContainer from './containers/CounterContainer';
import CountertwoContainer from './containers/CountertwoContainer';
import { Route, BrowserRouter as Router, Redirect, Switch, Link } from 'react-router-dom';
import Home from './home';
import Counter1 from './views/counter1'
import Counter2 from './views/counter2';


function App() {
  return(
    <div>
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/counter1">
          <button>Counter1</button>
        </Link>
        <Link to="/counter2">
          <button>Counter2</button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
        {/* "exact = {true}" 지우고 테스트 해보기 어떤 현상이 있는지 직접 확인*/}
        <Route path="/" exact={true} component={Home} /> 
        <Route path="/Counter1" component={Counter1} />
        <Route path="/Counter2" component={Counter2} />
        </Switch>
      </main>
    </Router>
    </div>
  );
}

export default App;