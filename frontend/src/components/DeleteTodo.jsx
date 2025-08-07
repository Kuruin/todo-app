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
        <div className="flex flex-col place-items-center">
        <input className="border justify-center w-72 px-3 py-1 rounded-2xl mb-5" onChange={(e) => setId(e.target.value)} type="text" placeholder="Enter ID"></input>
        <button className="border-hidden bg-red-300 hover:bg-red-500 hover:font-[550] hover:text-white rounded-md px-2 py-2" onClick={todoDeletion}>Delete Todo</button>
        </div>
    )

}