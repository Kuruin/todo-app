import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetTodo } from './components/GetTodo'
import { AddTodo } from './components/AddTodo'
import { DeleteTodo } from './components/DeleteTodo'

function App() {
  return (
    <div>
      <AddTodo/><br/>
      <DeleteTodo/> 
      <GetTodo/>
    </div>
  )
}

export default App
