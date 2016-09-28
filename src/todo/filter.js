import React, { Component } from 'react'

export default class Filter extends Component {

  render() {
    return (
      <div>
        <span onClick={() => {
          this.props.changeFilter('all')
        }}>all</span> { ' | ' }
        <span onClick={() => {
          this.props.changeFilter('active')
        }}>active</span> { ' | ' }
        <span onClick={() => {
          this.props.changeFilter('completed')
        }}>completed</span>
      </div>
    )
  }
}
