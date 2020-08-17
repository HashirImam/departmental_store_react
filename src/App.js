import React from 'react';
import './App.css';
import Nav from './ui/Nav'
import Shop from './ui/Shop';
import ItemDetail from './ui/ItemDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './ui/Home';
import { Provider } from 'react-redux';
import store from './ui/redux/store';

function App() {
  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
      <Nav />
     <Switch>
     <Route path="/" exact component = {Home} />
     <Route path="/shop" exact component={Shop} />
     <Route path="/shop/:id" component={ItemDetail} />
     </Switch>
     
    </div>
    </Router>
    </Provider>
    
  );
}

export default App;
