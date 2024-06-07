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

  return (
    // Menambahkan CSS
    /*Perlu menuliskan kurung kurawal 2x seperti <div style={{CSS code}} sebab code JSX itu sendiri memerlukan {} dan sebuah object {CSS code} ditambahkan di dalamnya.
    Property-property CSS sangat mirip dengan CSS yang normal namun dalam JSX ini berbeda. Contohnya, property text-align dalam CSS adalah textAlign dalam JSX (hubungkan 2 kata dengan sebuah huruf kapital, ini disebut Camel Case) dan padding: 12px; adalah padding: '12px', (apit nilainya dengan tanda petik). */
    <div style={{textAlign: 'center', padding: '12px'}}>
      <h1 style={{fontSize:'36px'}}>My Todos List</h1>
      {/*Hanya memanggil komponen Todos dan berikan datanya */}
      <Todos todos={todos}/>
    </div>
  )
}

export default App
