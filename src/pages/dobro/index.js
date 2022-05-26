import axios from "axios";
import {useState} from "react";

export default function Index(){
    const [numero,useNumero]= useState(0);
    const[resposta,useResposta]= useState(0); 

    async function calcularDobro(){
        const resp=await axios.get('dobro/'+numero);
        useResposta(resp.data.dobro)
    }

    <main>
        <h1>Dobro</h1>
        <div>
            Numero: <input type="text" value={numero} onChange={e=>useNumero(e.target.value)} />
        </div>
        <div>
            <button onClick={calcularDobro}> Calcular o Dobro</button>
        </div>
        <div>
            O Dobro é : {resposta}
        </div>
    </main>
}