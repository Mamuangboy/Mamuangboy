import './App.css';
import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import spider from "./containers/spider/spider";
import NotFound from "./containers/error/NotFound";
import spiderEdit from "./containers/spider/spiderEdit";
import spiderMain from './components/Main/spiderMain';

class App extends Component{
renderRouter(){
  return(
    <Switch>
      <Route exact path="/" component={spiderMain}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/spider" component={spider}/>
      <Route exact path="/spider/add" component={spiderEdit}/>
      <Route exact path="/spider/edit/:id" component={spiderEdit}/>
      <Route component={NotFound} />
    </Switch>
  );
}


  render(){
    return(
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>   
    );
  }
}

export default App;
