import Event from 'event.es6'

let todos = JSON.parse(localStorage.getItem('TODOS')) || []
let filter = 'all'

export const event = new Event()


export function getTodos() {
  return todos
}

export function getFilter() {
  return filter
}

function storage() {
  localStorage.setItem('TODOS', JSON.stringify(todos))
}
export function change(payload = todos) {

  if (filter !== 'all') {
    let is_completed = false
    if (filter === 'completed') {
      is_completed = true
    }
    payload = payload.filter(todo => {
      return todo.done === is_completed
    })
  }
  event.emit('change', payload)

  storage()
}

export function changeFilter(filter_text) {
  if (filter === filter_text) return
  filter = filter_text
  change()
}

export function add(todo) {
  let item = {
    id: todos.length+1,
    todo: todo,
    done: false,
  }
  todos.push(item)
  change()
}


export function remove(id) {
  todos = todos.filter((todo) => {
    return todo.id !== id
  })
  change()
}

export function update(todo) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id === todo.id) {
      todos[i] = {...todos[i], ...todo}
      if (filter !== 'all') {
        change()
      }
      storage()
      break
    }
  }
}
