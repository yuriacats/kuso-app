import './App.css';
import React from "react";
import {BrowserRouter, Route ,Routes,Switch,Redirect } from "react-router-dom";
import GraphView from "./view/GraphView";
import BakuhatuView from "./view/BakuhatuView"
class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={BakuhatuView}/>
            <Route exact path="/result" component={GraphView}/>
            <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
