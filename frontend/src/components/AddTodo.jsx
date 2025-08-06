import axios from "axios";
import { useEffect, useRef, useState } from "react"

export const AddTodo = ()=>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const divRef = useRef();

    useEffect(()=> divRef.current.focus(),[]);
    
    async function addTodo(){
        if(title == '' && description == ''){
            alert("Name and description is required!")
            return
        }
        const response = await axios.post("http://localhost:3000/add-todo", {
            name: title,
            description
        });
        (response.data.msg ? alert("Todo added successfully") : alert("Todo already exists!"))
        console.log(response)
    }


    return (
        <div className='flex flex-col h-screen place-items-center justify-center'>
            <input className="border rounded-md justify-items-center p-1 m-1" ref={divRef} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter your title"></input>
            <input className="border rounded-md justify-items-center p-1 m-1" onChange={(e)=> setDescription(e.target.value)}type="text" placeholder="Enter your description"></input>
            <button className="border rounded-lg p-2 mt-3 mr-26 hover:bg-blue-300" onClick={addTodo}>Add Todo</button>
        </div>
    )
}