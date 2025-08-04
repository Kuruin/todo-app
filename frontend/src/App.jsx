import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetTodo } from './components/GetTodo'
import { AddTodo } from './components/AddTodo'

function App() {
  return (
    <div>
      <AddTodo/>
      <GetTodo/>
    </div>
  )
}

export default App
