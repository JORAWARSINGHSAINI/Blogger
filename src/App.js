import React from 'react';
import './App.css';
import Home from './components/Home'
import Signup from './components/Signup'
import SignIn from './components/SignIn'
import Header from './partials/Header'
import Blog from './components/Blog'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import CreateBlog from './components/CreateBlog'
import { Settings } from './components/Settings';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">    
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/signin" component={SignIn}></Route>
      <Route path="/posts/:id" component={Blog}></Route>
      <Route path="/createBlog" component={CreateBlog}></Route>
      <Route path="/settings" component={Settings}></Route>
      <Route path="/profile" component={Profile}></Route> 
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
