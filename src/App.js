import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Chat from './views/Chat'
import Signup from './views/Signup'
import Login from './views/Login'


function App() {
  // const Home = lazy(() => import('./routes/Home'));
  const Signup = lazy(() => import('./views/Signup'))
  const Login = lazy(() => import('./views/Login'))
  const Chat = lazy(() => import('./views/Chat'))

  return (
    <Router>
      <div className="background-page">
        <div className="page-container">
          <Suspense fallback={<div>Login . . . </div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Signup} />
              <Route exact path="/chat" component={Chat} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
