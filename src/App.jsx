import React, { useState } from 'react'

function App() {
    /* todos merupakan variable state dan pengaturan nilai awal 0 bisa dilakukan dengan code useState(0). 
  setTodos yang didefinisikan merupakan sebuah function untuk memperbarui variable state Todos .*/
  const [todos, setTodos] = useState([
    // data awal dari todos berikut ini ditetapkan pada constanta todos menggunakan useState
    {
      id:1,
      title:'Finish Progate React Course',
      completed: false
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]) 

  console.log(todos)

  return (
    <div>
      <h1>My Todos List</h1>
      {/* Method map diperlukan untuk mengambil data dari sebuah Array satu per satu, gunakan method pada {}*/}
      {todos.map((todo) => {
        // key={todo.id} seharusnya ditambahkan pada masing-masing elemen dalam sebuah array untuk memberikan identitas yang unik dan membantu React mendeteksi element mana yang telah di-render.
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default App
