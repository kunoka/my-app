import React from 'react';
import App from '../../App';
import ComponentList from './list';
import ComponentDetails from './details';
import {Router,Route,hashHistory} from 'react-router';

export default class Root extends React.Component{
  render(){
    return (
      //这里替换了之前的 Index，变成了程序的入口
      <Router history={hashHistory}>

        <Route component={App} path="/">
          <Route component={ComponentDetails} path="details"></Route>
        </Route>

        <Route component={ComponentList} path="list/:id"></Route>

      </Router>
    );
  };
}