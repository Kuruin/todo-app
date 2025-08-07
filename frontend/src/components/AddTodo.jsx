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
        <div className='flex flex-col place-items-center justify-center'>
            <input className="border rounded-md px-3 py-1 m-1 text-wrap shadow-xl/20 w-70" ref={divRef} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Title... "></input>
            <input className="border rounded-md px-3 py-1 m-1 text-wrap shadow-xl/20 w-70" onChange={(e)=> setDescription(e.target.value)}type="text" placeholder="Description..."></input>
            <button className="border rounded-[50px] p-2 mt-3 mr-35 hover:bg-green-500 hover:text-white hover:font-bold w-35" onClick={addTodo}>Add Todo</button>
        </div>
    )
}