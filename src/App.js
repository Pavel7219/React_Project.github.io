import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import BuysTodo from './components/BuysTodo';
import MainMap from './components/MainMap'
import {bindActionCreators} from 'redux';
import {deleteTodo} from './actions/index'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <div className="todo-wrapper">
              <h1>Shoping list</h1>
              <BuysTodo data={this.props.data} actions={this.props.deleteTodo} />
          </div>
            <MainMap />

      </div>
    );
  }
}
function mapStateToProps(state) {
    return {
      data:state.buys.todos
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({deleteTodo:deleteTodo},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(App);


