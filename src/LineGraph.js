import { fireEvent } from '@testing-library/react';
import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { vmExampleData } from './data'
import './LineGraph.css'

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      vendor1: {opacity: 0.5, strokeWidth: 1, stroke: "#b3d4ff", legOpacity: 1},
      vendor2: {opacity: 0.5, strokeWidth: 1, stroke: "#82ca9d", legOpacity: 1},
      vendor3: {opacity: 0.5, strokeWidth: 1, stroke: "#ede15b", legOpacity: 1},
      vendor4: {opacity: 0.5, strokeWidth: 1, stroke: "#ff6361", legOpacity: 1},
      vendor5: {opacity: 0.5, strokeWidth: 1, stroke: "#bc5090", legOpacity: 1},
      vendor6: {opacity: 0.5, strokeWidth: 1, stroke: "#f46a9b", legOpacity: 1},
      vendor7: {opacity: 0.5, strokeWidth: 1, stroke: "#ffa600", legOpacity: 1},
      vendor8: {opacity: 0.5, strokeWidth: 1, stroke: "#27aeef", legOpacity: 1},
      vendor9: {opacity: 0.5, strokeWidth: 1, stroke: "#8884d8", legOpacity: 1},
      vendor10: {opacity: 0.5, strokeWidth: 1, stroke: "#9b19f5", legOpacity: 1},
      vendor11: {opacity: 0.5, strokeWidth: 1, stroke: "#fdcce5", legOpacity: 1},
      vendor12: {opacity: 0.5, strokeWidth: 1, stroke: "#d7e1ee", legOpacity: 1},
    }
    this.handleLegendClickToggle = this.handleLegendClickToggle.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleLegendClickToggle =(props) => {
    const { dataKey } = props
    for(let st in this.state) {
      if(this.state[dataKey].opacity === 0.5 || this.state[st].opacity === 1) {    
        if(st === dataKey) {
          this.setState({ [dataKey]: {...this.state[dataKey], opacity: 1, legOpacity: 1, strokeWidth: 3} })
        } else {
          if(this.state[st].strokeWidth === 3) {
            this.setState({ [st]: {...this.state[st]} })
          } else {
            this.setState({ [st]: {...this.state[st], opacity: 0.5, legOpacity: 0.5} })
          }
        }
      }
      if(this.state[dataKey].opacity === 1) {
        if(st === dataKey) {
          this.setState({ [dataKey]: {...this.state[dataKey], opacity: 0.5, legOpacity: 0.5, strokeWidth: 1} })
        }
      }
    }
  }

  renderLegend = (props) => {
    const { payload } = props;    
    return (
      <ul className='recharts-default-legend'>
        {
          payload.map((entry, index) => {
            return (
              <li 
              onClick={() => this.handleLegendClickToggle( {dataKey: entry.dataKey} )}
              className={`recharts-legend-item legend-item-${index}`}
              key={`item-${index}`}
              style={{
              display: 'inline-block',
              marginRight: '1em'}}>
                <span
                style={{color: entry.color, opacity: entry.payload.legOpacity}}>
                {entry.value}
                </span>
              </li>
            )
          })
        }
      </ul>
    );
  }

  renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      if(payload.every(vdr => vdr.strokeOpacity === 0.5)) {
        return null
      }
      return (
        <div className="LineGraph-custom-tooltip">
          <div className="LineGraph-custom-label">{label}</div>
          {payload.map(vdr => (
            vdr.strokeOpacity === 1 ? 
            <p key={vdr.name} className="LineGraph-custom-vendor" style={{color: vdr.color}}>{`${vdr.name} : ${vdr.value}`}</p>
            :
            ""
          ))}
        </div>
      );
    }
    return null;
  };

  handleButtonClick = () => {
    for(let st in this.state) {
      this.setState({ [st]: {...this.state[st], opacity: 0.5, strokeWidth: 1, legOpacity: 1} })
    }
  }

  renderLines = () => {
    let lines = []
    for(let vdr in this.state) {
      lines.push(
     <Line
      key={vdr}
      type="monotone"
      dataKey={vdr}
      stroke={this.state[vdr].stroke}
      strokeOpacity={this.state[vdr].opacity}
      strokeWidth={this.state[vdr].strokeWidth}
      legOpacity={this.state[vdr].legOpacity}
    />)}
    return lines
  }

  render() {
    const formatter = (value) => `${value}$`
    return (
      <div>
      <button className='LineGraph-reset' onClick={this.handleButtonClick}>Reset Vendor Filter</button>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={600}
          height={400}
          data={vmExampleData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fill: '#fff'}} />
          <YAxis tickFormatter={formatter} tick={{fill: '#fff'}} />
          <Tooltip content={this.renderTooltip} /> 
          <Legend content={this.renderLegend.bind(this)} />
          {this.renderLines()}
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

export default LineGraph;