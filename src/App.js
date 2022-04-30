import React, { Component } from 'react';
import LineGraphs from './LineGraphs';
import PieGraphs from './PieGraphs';
import BarGraphs from './BarGraphs';

class App extends Component {
  render() {
    return (
      <div>
        <LineGraphs />
        <PieGraphs />
        <BarGraphs />
      </div>
      );
  }
}

export default App;