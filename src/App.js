import React, { Component } from 'react';
import LineGraphs from './LineGraphs';
import PieGraphs from './PieGraphs';

class App extends Component {
  render() {
    return (
      <div>
        <LineGraphs />
        <PieGraphs />
      </div>
      );
  }
}

export default App;