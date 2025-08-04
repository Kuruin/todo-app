import axios from "axios";
import { useState } from "react"

export const DeleteTodo = () =>{

    const [id,setId] = useState(0);
    
    async function todoDeletion(){
        const response = await axios.post("http://localhost:3000/delete-todo",{id});
        console.log(id);
        (response.data.msg ? alert("Todo deleted"): alert("Todo dosent exists"))
    }
    return(
        <>
        <input onChange={(e) => setId(e.target.value)} type="text" placeholder="Enter ID"></input><br/>
        <button onClick={todoDeletion}>Delete Todo</button>
        </>
    )

}