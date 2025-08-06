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
        <div className='flex justify-evenly place-items-center sm:flex-row flex-col'>
        <AddTodo/>
        <DeleteTodo/>
        </div>
        <GetTodo/>
    </div>
  )
}

export default App
