import axios from "axios";
import { useEffect, useState } from "react";

export const Quotes = ()=>{
    const [quote,setQuote] = useState('')
    
    useEffect(()=>{
        const getQuotes = async ()=> {
            const response = await axios.get("http://localhost:3000/quotes");
            setQuote(response.data.quote)
            console.log("hehe")
        }
        getQuotes();
        setInterval(()=> getQuotes(),6000)
    },[])

    return(
        <div className="flex justify-center">
            <p className="font-bold text-3xl">{quote}</p>
        </div>
    )
}   