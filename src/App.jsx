import React, { useState } from 'react'
import Todos from './components/Todos'

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
      {/*Hanya memanggil komponen Todos dan berikan datanya */}
      <Todos todos={todos}/>
    </div>
  )
}

export default App
