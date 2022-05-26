import axios from "axios";
import {useState} from "react";

export default function Index(){
    const [numero,setNumero]= useState(0);
    const[resposta,setResposta]= useState(0); 

    async function calcularDobro(){
        const resp=await axios.get('http://localhost:5000/dobro/' + numero);
        setResposta(resp.data.dobro)
    }

    <main>
        <h1>Dobro</h1>
        <div>
            Numero: <input type="text" value={numero} onChange={e=>setNumero(e.target.value)} />
        </div>
        <div>
            <button onClick={calcularDobro}> Calcular o Dobro</button>
        </div>
        <div>
            O Dobro é : {resposta}
        </div>
    </main>
}