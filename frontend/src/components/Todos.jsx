export const Todos = ({todo}) =>{
    let id =0;
    return(
       <>
        {todo.map((todo)=>{ 
            id++
            return (
                <div key={id} id={id}>
                <p>Id:-{todo._id}</p>
                <h1>Title:- {todo.name}</h1>
                <h3>Descripiton:-{todo.description}</h3>
                <button>Mark as completed</button>
                </div>
            )
        })}
       </>
    )
}