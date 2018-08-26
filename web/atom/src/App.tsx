import * as redux from 'redux';
import About from './components/about/about';
import Home from './components/home/home';
import Login from './components/login/login';
import React from 'react';
import SignUp from './components/signup/signup';
import thunk from 'redux-thunk';
import Tools from './components/tools/tools';
import withRoot from './withRoot';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { default as Navbar } from './components/navigation/navbar';
import { Provider } from 'react-redux';
import './App.css';


import reducers, * as state from './app/counter/reducer';
// import { default as NavigationBelow } from './components/navigation/navigation.below';

const store: redux.Store<state.All> = redux.createStore(
  reducers,
  {} as state.All,
  redux.applyMiddleware(thunk),
)

const NavBar = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export const App: React.SFC<{}> = (_props) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route strict path="/tools" component={Tools} />
          <Route strict path="/about" component={About} />
          <Route strict path="/login" component={Login} />
          <Route strict path="/signup" component={SignUp} />
          <Route path="/logs" render={() => <h1>Logs</h1>} />
          <Route
            path="/children"
            children={({ match }) => {
              if (match) {
                return <h1>Children</h1>;
              }
              return null;
            }}
          />
          {/* <NavigationBelow /> */}
        </div>
      </Router>
      {/* <Root /> */}
    </Provider>
  );
}

export default withRoot(App);
