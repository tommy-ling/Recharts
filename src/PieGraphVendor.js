import React, { Component } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { colors } from './color'

class PieGraphVendor extends Component {
  RADIAN = Math.PI / 180;
  customizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * this.RADIAN);
    const y = cy + radius * Math.sin(-midAngle * this.RADIAN);
    return (
      <text x={x} y={y} fill="white" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  render() {
    const revenueByVendor = this.props.vendorItems.map(i => {
      const price = Object.values(i)[0].price
      const qty = Object.values(i)[0].qty
      const key = Object.keys(i)[0]
      return { name: [key][0], value: price*qty }
    })
    const totalRevenueByVendor = revenueByVendor.reduce((prevVal, currVal) => {
      return prevVal + currVal.value
    }, 0)
    const CustomizedCenterLabel = ({ viewBox, totalRev = 0, vendor }) => {
      const { cx, cy } = viewBox
      return (
        <React.Fragment>
          <text x={cx - 45} y={cy - 10}>
          <tspan
            fill='white'>
            Total: ${totalRev}
          </tspan>
        </text>
          <text x={cx-60} y={cy + 20}>
            <tspan
            fill='white'>
              Items by Vendor {vendor}
            </tspan>
          </text>
        </React.Fragment>
      )
    }
    return (
      <div className='PieGraph'>
      <ResponsiveContainer width="100%" aspect={1.8}>
        <PieChart>
          <Pie 
          data={revenueByVendor} 
          dataKey="value"
          outerRadius={200} 
          innerRadius='40%'
          label={this.customizedLabel}
          labelLine={false}
          >
            {
              revenueByVendor.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))
            }
            <Label
            position='center'
            content={<CustomizedCenterLabel 
              totalRev={totalRevenueByVendor}
              vendor={Object.values(this.props.vendorItems[0])[0].vendorId}/>}
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

export default PieGraphVendor