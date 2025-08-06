import axios from 'axios'
import { useEffect, useState } from 'react'
import { Todos } from './Todos';

export const GetTodo =() =>{
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
    const fetchTodos = async()=> {
        const response = await axios.get("http://localhost:3000/todos")
        setTodos(response.data.Todos)
        }
    fetchTodos();
    },[])

    return (
        <div className='flex flex-col'>
           <Todos todo={todos}/>
        </div>
    )
}