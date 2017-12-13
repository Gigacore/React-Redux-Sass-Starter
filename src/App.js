import React, { Component } from 'react';
import Counter from './components/Counter';

import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Counter />
    )
  }
}

export default App;