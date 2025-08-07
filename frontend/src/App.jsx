import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetTodo } from './components/GetTodo'
import { AddTodo } from './components/AddTodo'
import { DeleteTodo } from './components/DeleteTodo'
import { Quotes } from './components/Quotes'

function App() {
  return (
    <div>
        <Quotes/>
        <div className='flex justify-evenly place-items-center h-55'>
          <div>
            <div className='mb-15  pt-50'>
              <AddTodo/>
            </div>
        <DeleteTodo/>
          </div>
          <div className='mt-60'>
          <GetTodo/>  
          </div>
        </div>
    </div>
  )
}

export default App
