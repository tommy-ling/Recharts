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
    return (
      <div className='PieGraphs'>
        <Select 
          value="All"
          onChange={this.changeToVendor}
          style={{backgroundColor: '#d7e1ee', borderRadius: '15px', height: '30px'}}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem 
          value='All'
          onClick={this.handleClick}>All</MenuItem>
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