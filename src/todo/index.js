import React, { Component } from 'react'
import {
  event,
  getTodos, getFilter, getValue,
  add, update,
  changeFilter,
} from './store'

import New from './new'
import List from './list'
import Filter from './filter'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <New onSubmit={add} />
        <List getState={getTodos} event={event} update={update}/>
        <Filter filter={getFilter} changeFilter={changeFilter} />
      </div>
    )
  }
}
