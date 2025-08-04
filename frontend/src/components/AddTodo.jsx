import axios from "axios";
import { useEffect, useRef, useState } from "react"

export const AddTodo = ()=>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const divRef = useRef();
    
    useEffect(()=> divRef.current.focus(),[]);

    async function addTodo(){
        const response = await axios.post("http://localhost:3000/add-todo", {
            name: title,
            description
        });
        (response.data.msg ? alert("Todo added successfully") : alert("Todo already exists!"))
        console.log(response)
    }


    return (
        <>
            <input ref={divRef} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter your title"></input><br/>
            <input onChange={(e)=> setDescription(e.target.value)}type="text" placeholder="Enter your description"></input><br/>
            <button onClick={addTodo}>Add Todo</button><br/>
        </>
    )
}