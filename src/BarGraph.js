import React, { Component } from 'react';
import { BarChart, Bar, XAxis, Cell, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { vmItemQty, vmItemRev } from './data'
import './BarGraph.css'

class BarGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {qty: true, focusBar: null, mouseLeave: true}
  }
  render() {
    let vmItemQtyOrdered = [...vmItemQty]
    vmItemQtyOrdered = vmItemQtyOrdered.sort((a, b) => b.quantity - a.quantity)
    let vmItemRevOrdered = [...vmItemRev]
    vmItemRevOrdered = vmItemRevOrdered.sort((a, b) => b.revenue - a.revenue)
    return (
      <div className='BarGraph'>
        <div className='BarGraph-heading'>
        Filtered by <button 
        className='BarGraph-filterBtn'
        onClick={() => this.setState({qty: !this.state.qty})}>{this.state.qty ? 'Quantity' : 'Revenue'}</button>
        </div>
        <ResponsiveContainer height="100%" aspect={1.7}>
          <BarChart
            data={this.state.qty? vmItemQtyOrdered : vmItemRevOrdered}
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
            <Bar dataKey={this.state.qty? 'quantity' : 'revenue'} fill="#8884d8">
              {this.state.qty? 
              vmItemQtyOrdered.map((entry, index) => (
                <Cell
                  key={index}  
                  fill={this.state.focusBar === index || this.state.mouseLeave  ? "#8884d8" : "rgba(136, 132, 216, 0.4)"} 
                />
              )) :
              vmItemRevOrdered.map((entry, index) => (
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
    );
  }
}

export default BarGraph