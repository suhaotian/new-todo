import React, { Component } from 'react'

export default class New extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({value: ''})
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type="submit">add</button>
      </form>
    )
  }
}
