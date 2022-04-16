import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { allData } from './data'

class SumLineGraph extends Component {
  render() {
    const formatter = (value) => `${value}$`
      
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={600}
          height={400}
          data={allData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fill: '#fff'}}/>
          <YAxis tickFormatter={formatter} tick={{fill: '#fff'}} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="All_Vendors" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default SumLineGraph;