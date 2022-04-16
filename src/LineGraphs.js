import React, { Component } from 'react';
import LineGraph from './LineGraph';
import SumLineGraph from './SumLineGraph';
import './LineGraphs.css'

class LineGraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {btnValAll: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({ btnValAll: !this.state.btnValAll })
  }

  render() {
    return (
      <div>
        <div className="LineGraphs-filter">
          <span>Filter By</span>
          <button onClick={this.handleClick} value={this.state.btnValAll}>
            {this.state.btnValAll ? "All" : "Vendors"}
          </button>
        </div>
        {this.state.btnValAll ? <SumLineGraph /> : <LineGraph />}
      </div>
      );
  }
}

export default LineGraphs;