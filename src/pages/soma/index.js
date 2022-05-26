import axios from "axios";
import {useState} from "react";

export default function Index(){
    const[numero1,setNumero1]= useState(0);
    const[numero2,setNumero2]= useState(0);
    const[resposta,useResposta]= useState(0);

    async function Somar(){
        const resp=await axios.post('http://localhost:5000/somar',{
            j:numero1,
            n:numero2
        })
        useResposta(resp.data.soma)
    }


    <main>
        <h1> Somar</h1>
        <div>
            Numero1: <input type="text" value={numero1} onChange={e=> setNumero1(e.target.value)}/> 
        </div>
        <div>
            numero2: <input type="text" value={numero2} onChange={e=> setNumero2(e.target.value)}/>
        </div>
        <div>
            <button onClick={Somar}> Calcular a soma</button>
        </div>
        <div>
            O resultado é: {resposta}
        </div>
    </main>
}