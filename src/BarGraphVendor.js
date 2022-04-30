import React, { Component } from 'react';
import { BarChart, Bar, XAxis, Cell, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './BarGraphVendor.css'

class BarGraphVendor extends Component {
  constructor(props) {
    super(props)
    this.state = {qty: true, focusBar: null, mouseLeave: true}
  }
  render() {
    const revByVendorOrdered = this.props.vendorItems.map(i => {
      const price = Object.values(i)[0].price
      const qty = Object.values(i)[0].qty
      const key = Object.keys(i)[0]
      return { name: [key][0], revenue: price*qty }
    }).sort((a, b) => b.revenue - a.revenue)
    
    const qtyByVendorOrdered = this.props.vendorItems.map(i => {
      const qty = Object.values(i)[0].qty
      const key = Object.keys(i)[0]
      return { name: [key][0], quantity: qty }
    }).sort((a, b) => b.quantity - a.quantity)
    
    const numItems = this.props.vendorItems.length

    return (
      <div className='BarGraphVendor'>
        <div className='BarGraphVendor-heading'>
        Filtered by <button 
        className='BarGraphVendor-filterBtn'
        onClick={() => this.setState({qty: !this.state.qty})}>{this.state.qty ? 'Quantity' : 'Revenue'}</button>
        </div>
        <ResponsiveContainer height='100%' aspect={8/numItems}>
          <BarChart
            data={this.state.qty? qtyByVendorOrdered : revByVendorOrdered}
            layout='vertical'
            onMouseMove={(state) => {
              if(state.isTooltipActive) {
                this.setState({...this.state, focusBar: state.activeTooltipIndex, mouseLeave: false})
              } else {
                this.setState({...this.state, mouseLeave: true})
              }
            }}
            >
            <XAxis type="number" tick={{fill: '#fff'}} />
            <YAxis type="category" dataKey="name" tick={{fill: '#fff'}} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Bar dataKey={this.state.qty? 'quantity' : 'revenue'} fill="#8884d8" barSize={18}>
              {this.state.qty? 
              qtyByVendorOrdered.map((entry, index) => (
                <Cell
                  key={index}  
                  fill={this.state.focusBar === index || this.state.mouseLeave  ? "#8884d8" : "rgba(136, 132, 216, 0.4)"} 
                />
              )) :
              revByVendorOrdered.map((entry, index) => (
                <Cell
                  key={index}  
                  fill={this.state.focusBar === index || this.state.mouseLeave ? "#8884d8" : "rgba(136, 132, 216, 0.4)"} 
                />
              ))}
            </Bar>
            <Tooltip cursor={false}/>
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default BarGraphVendor