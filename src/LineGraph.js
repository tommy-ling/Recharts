import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { vendorData } from './data'
import './LineGraph.css'

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      vendor1: {opacity: 0.5, strokeWidth: 1, stroke: "#b3d4ff"},
      vendor2: {opacity: 0.5, strokeWidth: 1, stroke: "#82ca9d"},
      vendor3: {opacity: 0.5, strokeWidth: 1, stroke: "#ede15b"},
      vendor4: {opacity: 0.5, strokeWidth: 1, stroke: "#ff6361"},
      vendor5: {opacity: 0.5, strokeWidth: 1, stroke: "#bc5090"},
      vendor6: {opacity: 0.5, strokeWidth: 1, stroke: "#f46a9b"},
      vendor7: {opacity: 0.5, strokeWidth: 1, stroke: "#ffa600"},
      vendor8: {opacity: 0.5, strokeWidth: 1, stroke: "#27aeef"},
      vendor9: {opacity: 0.5, strokeWidth: 1, stroke: "#8884d8"},
      vendor10: {opacity: 0.5, strokeWidth: 1, stroke: "#9b19f5"},
      vendor11: {opacity: 0.5, strokeWidth: 1, stroke: "#fdcce5"},
      vendor12: {opacity: 0.5, strokeWidth: 1, stroke: "#d7e1ee"},
    }
    this.handleLegendClickToggle = this.handleLegendClickToggle.bind(this)
  }

  handleLegendClickToggle(txt) {
    const { dataKey } = txt
    if(this.state[dataKey].opacity === 0.5 && this.state[dataKey].strokeWidth === 1) {
      this.setState({ [dataKey]: {...this.state[dataKey], opacity: 1, strokeWidth: 3} })
    } else {
      this.setState({ [dataKey]: {...this.state[dataKey], opacity: 0.5, strokeWidth: 1} })
    }
  }
  // Render customized legend below
  // renderLegend(props) {
  //   const { payload } = props;    
  //   return (
  //     <ul className='recharts-default-legend'>
  //       {
  //         payload.map((entry, index) => {
  //           return (
  //             <li 
  //             className={`recharts-legend-item legend-item-${index}`}
  //             key={`item-${index}`}
  //             style={{
  //             display: 'inline-block',
  //             marginRight: '1em'}}>
  //               <span
  //               style={{color: entry.color}}>
  //               {entry.value}
  //               </span>
  //             </li>
  //           )
  //         })
  //       }
  //     </ul>
  //   );
  // }

  renderTooltip({ active, payload, label }) {
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

  renderLines() {
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
    />)}
    return lines
  }

  render() {
    const formatter = (value) => `${value}$`
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={600}
          height={400}
          data={vendorData}
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

          {/* customize Tooltip */}
          {/* <Tooltip /> */}
          <Tooltip content={this.renderTooltip} />

          {/* Tried to customize below. onClick doesn't work with customized legend */}
          <Legend onClick={this.handleLegendClickToggle} />
          {/* <Legend 
          onClick={this.handleLegendClickToggle} 
          content={this.renderLegend} /> */}

          {this.renderLines()}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default LineGraph;