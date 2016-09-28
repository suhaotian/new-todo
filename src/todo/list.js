import React, { Component } from 'react'
import Item from './item'

export default class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: props.getState()
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.event.on('change', this.handleChange)
  }

  handleChange(payload) {
    this.setState({
      list: payload
    })
  }

  render() {
    return (
      <div>
        {
          this.state.list.map(item => {
            return (
              <Item key={item.id} todo={item} event={this.props.event} update={this.props.update}/>
            )
          })
        }
      </div>
    )
  }
}
