import React, {Component} from 'react'
import { MenuItem, Select } from '@mui/material'
import PieGraph from './PieGraph'
import PieGraphVendor from './PieGraphVendor'
import { vmSoldByItem } from './data'
import './PieGraphs.css'

class PieGraphs extends Component {
  constructor(props) {
    super(props)
    this.state = {items: vmSoldByItem, indVdrOn: false}
    this.changeToVendor = this.changeToVendor.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  changeToVendor(e) {
    const filteredItems = this.state.items.filter(item =>
      Object.values(item)[0].vendorId === e.target.value
    )
    this.setState({...this.state.items, newItems: filteredItems, indVdrOn: true })
  }
  handleClick() {
    this.setState({...this.state.items, indVdrOn: false})
  }
  render() {
    const vdrId = this.state.items.map(item => 
      Object.values(item)[0].vendorId
      ).filter((id, idx, arr) => 
      arr.indexOf(id) === idx
      ).sort((a,b) => a - b)

    return (
      <div className='PieGraphs'>
        <Select 
        value="All"
        onChange={this.changeToVendor}
        style={{backgroundColor: '#d7e1ee', borderRadius: '15px', height: '30px'}}>
          {vdrId.map(id => {
            return (
              <MenuItem value={id} key={id}>{id}</MenuItem>
            )
          })}
          <MenuItem 
          value='All'
          onClick={this.handleClick}>Select Vendor</MenuItem>
        </Select>
        {this.state.indVdrOn ? 
        <PieGraphVendor vendorItems={this.state.newItems}/> :
        <PieGraph /> 
        }
      </div>
    )
  }
}

export default PieGraphs