import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import NavContainer from "./containers/Nav";
import ReadContainer from "./containers/Read";
import ControlContainer from './containers/Control';
import CreateContainer from './containers/Create';
import UpdateContainer from './containers/Update';
import { connect } from 'react-redux';

class App extends Component {
  render(){
    var article = null;
    if(this.props.mode === 'READ') {
      article = <ReadContainer></ReadContainer>    
    }else if (this.props.mode === 'WELCOME'){
      article = <ReadContainer></ReadContainer>
    }else if (this.props.mode === 'CREATE'){
      article = <CreateContainer></CreateContainer>
    }else if (this.props.mode === 'UPDATE'){
      article = <UpdateContainer></UpdateContainer>
    }
    return (
      <div className="App">
        <Header></Header>
        <NavContainer></NavContainer>
        <ControlContainer></ControlContainer>
        {article}
      </div>
    );
  } 
}

//web 내에서 바로 export하지 않고, connect를 써서, readContainer,createContainer인지를 알 필요((redux의 상태)
export default connect(
  function(state) {
    return {
      mode : state.mode
    }
  }
)(App);
