import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from './components/store/index';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Content />
        </Provider>
      </div>
    );
  }
}

export default App;