import React, {Component} from 'react'
import { MenuItem, Select } from '@mui/material'
import BarGraph from './BarGraph'
import BarGraphVendor from './BarGraphVendor'
import { vmSoldByItem } from './data'
import './BarGraphs.css'

class BarGraphs extends Component {
  constructor(props) {
    super(props)
    this.state = {items: vmSoldByItem, indVdrOn: false}
    this.handleClick = this.handleClick.bind(this)
    this.handleVdrClick = this.handleVdrClick.bind(this)
  }
  handleClick() {
    this.setState({...this.state.items, indVdrOn: false, vdrId: null})
  }
  handleVdrClick(e) {
    const filteredItems = this.state.items.filter(item =>
      Object.values(item)[0].vendorId === parseInt(e.target.textContent)
    )
    this.setState({...this.state.items, 
      newItems: filteredItems, 
      indVdrOn: true, 
      vdrId: Object.values(filteredItems[0])[0].vendorId})
  }
  render() {
    const vdrId = this.state.items.map(item => 
      Object.values(item)[0].vendorId
      ).filter((id, idx, arr) => arr.indexOf(id) === idx
      ).sort((a,b) => a - b)

    return (
      <div className='BarGraphs'>
        <span className='BarGraphs-vdr'>{this.state.vdrId ? "Vendor: " : ""}</span>
        <Select 
        value={this.state.vdrId ? this.state.vdrId : 'All'}
        style={{backgroundColor: '#d7e1ee', borderRadius: '15px', height: '30px'}}>
          {vdrId.map(id => {
            return (
              <MenuItem onClick={this.handleVdrClick} value={id} key={id}>{id}</MenuItem>
            )
          })}
          <MenuItem 
          value='All'
          onClick={this.handleClick}>Select Vendor</MenuItem>
        </Select>
        {this.state.indVdrOn ? 
        <BarGraphVendor vendorItems={this.state.newItems}/> :
        <BarGraph /> 
        }
      </div>
    )
  }
}

export default BarGraphs