import React from 'react';
import Home from '../home';
import { Route, BrowserRouter as Router, Redirect, Switch, Link } from 'react-router-dom';
import Counter2 from '../views/counter2';

const page = () => {
    return (
        <Router>
            <header>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/counter2">
                     <button>Counter2</button>
                </Link>
            </header>
            <hr />
            <main>
            <Switch>
                <Route  path="/" exact={true} component={Home} /> 
                <Route path="/Counter2" component={Counter2} />
            </Switch>
            </main>
        </Router>
    )
}
export default page;
