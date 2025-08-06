export const Todos = ({todo}) =>{
    let id =0;
    return(
       <>
        {todo.map((todo)=>{ 
            id++
            return (
                <div key={id} id={id} className="flex flex-col place-items-center justify-center py-3">
                <p className="font-bold">Id:-{todo._id}</p>
                <h1 className="font-semibold">Title:- {todo.name}</h1>
                <h3>Descripiton:-{todo.description}</h3>
                <button className="border rounded-lg px-2 py-1 hover:bg-green-400">Mark as completed</button>
                </div>
            )
        })}
       </>
    )
}