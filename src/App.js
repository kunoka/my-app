import React, { Component } from 'react';
import ComponentHeader from './js/components/header'
import ComponentFooter from './js/components/footer'
import BodyIndex from './js/components/bodyindex';
import 'antd/dist/antd.css';

class App extends Component {
  componentWillMount(){
    //定义你的逻辑即可
    console.log("Index - componentWillMount");
  }

  componentDidMount(){
    console.log("Index - componentDidMount");
  }

  render() {
    return (
      <div>
        <ComponentHeader/>
        <BodyIndex userid={999} username={"Parry1"}/>
        <div>
          {this.props.children}
        </div>
        <ComponentFooter/>
      </div>
    );
  }
}

export default App;
