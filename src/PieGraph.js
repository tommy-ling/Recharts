import React, { Component } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { vmItemRev } from './data'
import { colors } from './color'

class PieGraph extends Component {
  totalRevenueByVendor = vmItemRev.reduce((prevVal, currVal) => {
    return prevVal + currVal.revenue
  }, 0)
  
  RADIAN = Math.PI / 180;
  customizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * this.RADIAN);
    const y = cy + radius * Math.sin(-midAngle * this.RADIAN);
    return (
      <text x={x} y={y} fill="black" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    const CustomizedCenterLabel = ({ viewBox, totalRev = 0 }) => {
      const { cx, cy } = viewBox
      return (
        <React.Fragment>
          <text x={cx - 50} y={cy - 10}>
            <tspan
            fill='white'>
              Total: ${totalRev}
            </tspan>
          </text>
          <text x={cx-60} y={cy + 20}>
            <tspan
            fill='white'>
              Revenue by Items
            </tspan>
          </text>
        </React.Fragment>
      )
    }
    return (
      <div>
      <ResponsiveContainer width="100%" aspect={1.8}>
        <PieChart>
          <Pie 
          data={vmItemRev} 
          dataKey="revenue"
          outerRadius={200} 
          innerRadius='40%'
          label={this.customizedLabel}
          labelLine={false}
          >
            {
              vmItemRev.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
              ))
            }
            <Label
            position='center'
            content={<CustomizedCenterLabel
              totalRev={this.totalRevenueByVendor}/>} 
            />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      </div>
    )
  }
}

export default PieGraph