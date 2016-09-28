import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props) {
      super(props)

      this.state = {
        todo: props.todo
      }

      this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.todo !== nextState.todo || nextProps.todo !== this.props.todo)
  }

  handleClick() {
    this.setState({
      todo: {
        ...this.state.todo,
        done: !this.state.todo.done,
      }
    }, () => {
      this.props.update(this.state.todo)
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <span style={{textDecoration: this.state.todo.done ? 'line-through' : 'none'}}>{this.state.todo.todo}</span>
      </div>
    )
  }
}
