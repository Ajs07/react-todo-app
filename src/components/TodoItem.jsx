import React from 'react'

const TodoItem = ({ todo }) => {
  return (
    <div style={style.TodoItem}>
      <p>{todo.title}</p>
    </div>
  )
}

const styles = {
    todoItem: {
      border: '2px solid #f4f4f4',
      fontSize: '24px',
    },
}

export default TodoItem